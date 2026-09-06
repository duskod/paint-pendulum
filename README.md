# Paint Pendulum

A paint can on a string. **https://pendulum.clockerly.com**

Pull the can, let go, and paint spirals across the board as the pendulum swings, precesses and dies
down. It is a real spherical pendulum, not a drawn Lissajous figure, so the loops never quite repeat.

## Playing
- **Pull the can and let go.** The speed and direction you release it with set the swing. `Esc` cancels a pull.
- **Catch** stops it (or press `space`). **Undo** reverses the last launch, removal or clear.
- **Nozzle**: a two-tone ribbon, a single colour, or a bar of 3 to 6 holes in a line that leaves
  parallel trails. **Gap** sets the hole spacing, **Twist** how fast the can (and bar) turns.
- **Sway** hangs the board on its own strings so it swings too, like a harmonograph. **Turn** spins it.
- **Flow** and **String** set the line weight and the period; **Air** how fast the swing dies.
- The board's edges drag to resize it; paint only lands on the board. **Fit board** restores it.
- **Swings** chips: hover to see one swing alone, click to give it another palette or custom colours, or remove it (asked first).
- **Save** exports the board as a PNG (share sheet on phones).
- Paint sets, board and desk each have a **Custom** chip with colour pickers. Choices are remembered.

The control tray drags by its grip; drop it near a side to dock it as a column, near the top or bottom to lie flat. Double-click the grip to reset.

Keys: `space` catch, `z` undo, `c` clear, `s` save, `f` fullscreen, `h` hide the tray.

## Code
One file, `index.html`, no build step beyond `build.py`, which wraps `src-artifact.html` (the page
as authored in Claude Code) in the document head, manifest and service-worker registration.
MIT licence.
