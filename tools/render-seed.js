#!/usr/bin/env node
/*
 * Render a Paint Pendulum seed to a PNG at any size.
 *
 *   node tools/render-seed.js <token|"new"> [--px 7000] [--out file.png] [--url URL] [--json]
 *
 * A token is the whole recipe: the seed, the board and the colour scheme. The picture is composed and run on the
 * simulation clock rather than the wall clock, so a swing that takes a minute on screen renders in about a second.
 * Every dab is recorded in metres on the board, so --px only decides how many pixels those metres are worth:
 * 7000 px on the long edge is roughly A2 at 300 dpi, which is the largest print worth ordering from one of these.
 *
 * Needs Chrome and puppeteer-core (npm i puppeteer-core).
 */
const fs=require('fs'),path=require('path');
let puppeteer; try{ puppeteer=require('puppeteer-core'); }
catch(e){ console.error('needs puppeteer-core:  npm i puppeteer-core'); process.exit(2); }

const argv=process.argv.slice(2);
const flag=(n,d)=>{const i=argv.indexOf('--'+n);return i<0?d:argv[i+1];};
const token=(argv[0]&&!argv[0].startsWith('--'))?argv[0]:'new';
const px=+flag('px',7000), json=argv.includes('--json');
const CHROME=process.env.CHROME||'/usr/bin/google-chrome';
const url=flag('url','file://'+path.resolve(__dirname,'..','index.html'));
// the board is fitted to the window, so the window decides the shape of a freshly rolled picture; a token
// carries its own board and overrides this
const [vw,vh]=(flag('viewport','1600x1000')).split('x').map(Number);

(async()=>{
  const b=await puppeteer.launch({executablePath:CHROME,headless:'new',
    args:['--no-sandbox','--allow-file-access-from-files','--force-device-scale-factor=1','--hide-scrollbars']});
  try{
    const p=await b.newPage();
    await p.setViewport({width:vw,height:vh,deviceScaleFactor:1});
    const errs=[]; p.on('pageerror',e=>errs.push(String(e)));
    await p.goto(url,{waitUntil:'load'});
    await p.waitForFunction('typeof window.PP==="object"',{timeout:15000});
    await new Promise(r=>setTimeout(r,400));
    const r=await p.evaluate(async(tok,size)=>{
      setAutoplay(false); setTheatre(false,{silent:true}); stopCan(); clearBoard();
      const t=PP.paint(tok==='new'?undefined:tok);
      const ran=PP.run(140);
      const bl=await PP.blob(size);
      return {token:t,seconds:+ran.toFixed(1),stats:PP.stats(),bytes:Array.from(new Uint8Array(await bl.arrayBuffer()))};
    },token,px);
    if(errs.length) throw new Error(errs[0]);
    const out=flag('out',`paint-pendulum-${r.token}-${px}px.png`);
    fs.writeFileSync(out,Buffer.from(r.bytes));
    if(json) console.log(JSON.stringify({token:r.token,file:out,px,seconds:r.seconds,
      dabs:r.stats.dabs,board:r.stats.board,geom:r.stats.geom,bytes:r.bytes.length},null,1));
    else console.log(`${r.token}  ->  ${out}  (${(r.bytes.length/1048576).toFixed(2)} MB, ${r.seconds}s of swing, ${r.stats.dabs} dabs)`);
  } finally { await b.close(); }
})().catch(e=>{ console.error('render failed:',e.message); process.exit(1); });
