# Paint Pendulum

A paint can on a string. **https://pendulum.clockerly.com**

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
  Lissajous, rosette, spirograph, rake, ribbon, splatter) with random colours, periods and release moment, and shows
  the recipe to repeat it. **Auto-play** (`a`; double-tap Surprise on the phone) keeps serving new ones.
- **Pull the can and let go.** The speed and direction you release it with set the swing. `Esc` cancels a pull.
- **Tap the board** (or press **Catch** / `space`) to catch it. **Undo** reverses the last launch, removal or clear.
- **Nozzle**: a two-tone ribbon, a single colour, a bar of 3 to 6 holes in a line that leaves parallel
  trails, a **pen** (thin uniform line, never pools) or a **marbled** stream that changes colour as it pours.
  **Gap** sets the hole spacing, **Twist** how fast the can (and bar) turns. **Splat** flings droplets off the stream.
- **Example** menu: pick one and watch a ghost hand pull the can and flick it, then the pattern draws itself; a card lists the settings and gestures to repeat it by hand.
  Harmonograph (the classic two-lobe print: pen on the can, board swinging at a slightly different period),
  Rosette, Lissajous 2:3, Splatter can, Six-colour rake.
- The board hangs on its own strings as a second pendulum. Pull the **steel handle on its left edge** and let go
  to swing it in any direction you like (straight down for a vertical sway); **Board str.** sets its period, so the
  ratio to the can's **String** is yours to choose. **Sway** gives it a random push whenever you release the can.
  **Turn** spins the board.
- **Flow** and **String** set the line weight and the period; **Air** how fast the swing dies.
- The board's edges drag to resize it. The brass handle on its top edge moves the board under the pendulum, paint and all (Shift-drag on the board does the same). Paint only lands on the board. To put the pivot somewhere else over the board instead, drag the dashed ring round the can while it hangs at rest. **Fit board** restores everything.
- To slide the whole view instead (board, pivot and can together) drag with the right or middle mouse button, use two fingers on a phone, or the arrow keys; `0` recentres.
- **Swings** chips: hover to see one swing alone, click to give it another palette or custom colours, or remove it (asked first).
- **Save** exports the board as a PNG (share sheet on phones).
- Paint sets, board and desk each have a **Custom** chip with colour pickers. Choices are remembered.

The control tray drags by its grip; drop it near a side to dock it as a column, near the top or bottom to lie flat. Double-click the grip to reset.

On a phone a slim bar at the bottom carries Catch, Undo, Clear, Save and More; the full tray opens as a half-height sheet and closes as soon as you touch the board.

**Movie mode** (on by default) fades the controls and rig away five seconds after a pattern starts if nothing is touched; move the mouse, touch the screen or press a key and they return. **View** (or `v`, or View on the phone bar) does the same on demand: rig, tray and readouts all go, and a tap or any key brings them back. **Hide rig** (`r`) hides just the can, string and handles. Press `?` for the full list of controls.

Keys: `space` catch, `z` undo, `c` clear, `s` save, `v` view, `r` rig, `f` fullscreen, `h` hide the tray, arrows pan, `0` recentre, `?` help.

## Code
One file, `index.html`, no build step beyond `build.py`, which wraps `src-artifact.html` (the page
as authored in Claude Code) in the document head, manifest and service-worker registration.
MIT licence.
