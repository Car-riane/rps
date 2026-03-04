# Rock Paper Scissors

A browser-based Rock Paper Scissors game built with vanilla HTML and JavaScript. First to 5 points wins.

## Live Demo

> _Add your GitHub Pages link here_

---

## Features

- 🎮 Play against the computer with randomised choices
- 🏆 First to 5 points is crowned Champion
- 📊 Live score tracking for both player and computer
- 🔢 Round counter increments on every move
- 🔒 Buttons disable automatically when the game ends
- 📝 Round-by-round result display showing what each side chose and why they won

---

## How to Play

No installation needed — just open `index.html` in your browser:

```bash
git clone https://github.com/Car-riane/rps.git
cd rps
open index.html
```

Click **Rock**, **Paper**, or **Scissors** to make your move. The computer picks randomly. First to 5 wins takes the game.

---

## Project Structure

```
rps/
├── index.html     # Game layout and button structure
└── myscripts.js   # All game logic and DOM updates
```

---

## How It Works

All game logic lives in `myscripts.js`. The core is `playround()`, which compares the human and computer choices using explicit win conditions and updates the DOM accordingly. A guard at the top of `playround()` prevents further moves once either score hits 5, and `disableButtons()` locks the UI to make the end state clear.

---

## What I Learned

- Attaching event listeners to multiple buttons with `querySelectorAll` and `forEach`
- Updating the DOM dynamically in response to user interaction
- Managing game state with simple variables (`humanScore`, `computerScore`, `roundCount`)
- Writing clear conditional logic for win/loss/tie detection
- Disabling UI elements programmatically to communicate game state to the user

---

## Built With

- HTML5
- Vanilla JavaScript

---

## Future Improvements

- Add a reset button so the player can start a new game without refreshing
- Improve the UI with CSS styling and animations
- Add keyboard support (R, P, S keys)
- Refactor into a class-based structure
