# Paint Pendulum

A paint can on a string. **https://pendulum.clockerly.com**

Made by [Dusko Delic](https://duskod.github.io/) in Teddington, London, 2026. Free, open source (MIT), no adverts, no account.

Pull the can, let go, and paint spirals across the board as the pendulum swings, precesses and dies
down. It is a real spherical pendulum, not a drawn Lissajous figure, so the loops never quite repeat.

## Two rooms
**Theatre** (the highlighted button, `t`, or Theatre on the phone bar): sit back and watch. Patterns compose
themselves one after another on a board held still on screen, full screen where the browser allows, nothing else
on show. Move the mouse or touch for the bar: Next (`n`, `→`), Pause (`p`), Save, Studio (`Esc`).

**Studio**: everything below.

A first visit opens in the theatre with the bar held on screen; after that the app reopens in whichever room you left.

## Playing
- **Surprise me** (or `p`, or Surprise on the phone bar) composes a pattern for you: a random family (harmonograph,
  Lissajous, rosette, spirograph, turntable, rake, ribbon, splatter) with random colours, periods and release moment, and shows
  the recipe to repeat it. **Auto-play** (`a`; double-tap Surprise on the phone) keeps serving new ones.
- **Pull the can and let go.** The speed and direction you release it with set the swing. `Esc` cancels a pull.
- **Tap the board** (or press **Catch** / `space`) to catch it. **Undo** reverses the last launch, removal or clear.
- **Nozzle**: a two-tone ribbon, a single colour, a bar of 3 to 6 holes in a line that leaves parallel
  trails, a **pen** (thin uniform line, never pools) or a **marbled** stream that changes colour as it pours.
  **Gap** sets the hole spacing, **Twist** how fast the can (and bar) turns. **Splat** flings droplets off the stream.
- **Example** menu: pick one and watch a ghost hand pull the can and flick it, then the pattern draws itself; a card lists the settings and gestures to repeat it by hand.
  Harmonograph (the classic two-lobe print: pen on the can, board swinging at a slightly different period),
  Rosette, Turntable (the classic three-colour pendulum print: loops walking round a hole, one colour per launch),
  Lissajous 2:3, Splatter can, Six-colour rake.
- The board hangs on its own strings as a second pendulum. Pull the **steel handle on its left edge** and let go
  to swing it in any direction you like (straight down for a vertical sway); **Board str.** sets its period, so the
  ratio to the can's **String** is yours to choose. **Sway** gives it a random push whenever you release the can.
  **Turn** spins the board about its own centre, like a turntable on an axle. Put the pivot off the board's centre
  (drag the dashed ring round the can at rest) and the swing's loops walk round in a ring, leaving a hole over the axle.
- **Flow** and **String** set the line weight and the period; **Air** how fast the swing dies.
- The board's edges drag to resize it. The brass handle on its top edge moves the board under the pendulum, paint and all (Shift-drag on the board does the same). Paint only lands on the board. To put the pivot somewhere else over the board instead, drag the dashed ring round the can while it hangs at rest. **Fit board** restores everything.
- To slide the whole view instead (board, pivot and can together) drag with the right or middle mouse button, use two fingers on a phone, or the arrow keys; `0` recentres.
- **Swings** chips: hover to see one swing alone, click to give it another palette or custom colours, or remove it (asked first).
- **Save** exports the board as a PNG (share sheet on phones).
- **Gallery** (`g`): in the theatre, every pattern that runs to its end is kept as it finished, on the device. View, save, delete, or open its recipe.
- Paint sets, board and desk each have a **Custom** chip with colour pickers. Choices are remembered.

The control tray drags by its grip; drop it near a side to dock it as a column, near the top or bottom to lie flat. Double-click the grip to reset.

On a phone a slim bar at the bottom carries Clear, Undo, Surprise, Save, Theatre and More (tap the board to catch the can); the full tray opens as a half-height sheet and closes as soon as you touch the board. Leaving the Theatre always lands on a square, centred board, and if the board is ever pushed right off the screen a button appears to bring it back.

Choosing a custom paint, board or desk colour opens a row at the top of the tray, so nothing you were about to click moves. On desktop the board is fitted to the space above the control tray, and refits itself if the tray grows, unless you have moved or resized the board yourself.

**Colours** (in the tray, and a button on the theatre bar): the theatre paints on a mixture of dark and light boards, or always **Dark**, or always **Light**. The paints still vary within the scheme, so the pictures stay different from one another. It is remembered on the device, and `?theatre&scheme=dark` pins it for a screen saver.

**As a desktop wallpaper.** Open `https://pendulum.clockerly.com/?wallpaper` in any wallpaper app that accepts a web
address. On Windows, [Lively Wallpaper](https://github.com/rocksdanister/lively) is free and open source and does the
job (it can use the same page as a screen saver too); Wallpaper Engine on Steam also works. `?wallpaper` paints exactly
as the theatre does but does **not** hold the screen awake, so the machine can still go to sleep; `?theatre` holds it
awake on purpose, which is what a screen saver wants. Add `&scheme=dark` or `&scheme=light` to either.

**Movie mode** (on by default) fades the controls and rig away five seconds after a pattern starts if nothing is touched; move the mouse, touch the screen or press a key and they return. **View** (or `v`, or View on the phone bar) does the same on demand: rig, tray and readouts all go, and a tap or any key brings them back. **Hide rig** (`r`) hides just the can, string and handles. Press `?` for the full list of controls.

Keys: `space` catch, `z` undo, `c` clear, `s` save, `v` view, `r` rig, `f` fullscreen, `h` hide the tray, arrows pan, `0` recentre, `?` help.

## Code
One file, `index.html`, no build step beyond `build.py`, which wraps `src-artifact.html` (the page
as authored in Claude Code) in the document head, manifest and service-worker registration.
MIT licence.
