# Simon Game

A web-based implementation of the classic electronic memory game "Simon." This project challenges players to remember an increasingly long sequence of colors and sounds, testing their short-term memory. 

## Features

* **Dynamic Gameplay Loop:** The game automatically generates and tracks complex patterns, progressing infinitely until the player makes a mistake.
* **Audio-Visual Feedback:** Each button features a unique sound and click animation to provide immediate feedback, mimicking the physical hardware of the original toy.
* **Strict Game-Over State:** Includes visual error flashing, failure audio, and a complete logical reset that allows the player to restart immediately via keyboard input.
* **Fully Responsive:** Playable on desktop and scaled for clear visibility.

## Live Demo

[View Live Project Here](https://mclovin312.github.io/Simon-Game/)

## Technologies Used

* **HTML5:** Semantic structure for the game board.
* **CSS3:** Styling, grid layouts, and visual animations.
* **JavaScript (ES6):** Core game logic, array tracking, and sequence generation.
* **jQuery:** DOM manipulation, event handling, and animation synchronization.

## How to Play

1. Press any keyboard key to start the game.
2. The game will flash a single color and play a sound. 
3. Click the matching color.
4. If correct, the game will repeat the first color and add a *new* color to the sequence.
5. You must repeat the **entire sequence from the very beginning** every time a new color is added.
6. If you click the wrong color or click out of order, the background will flash red and the game will end. Press any key to restart from Level 1.

## Local Installation (Using VS Code Live Server)

To run this project locally on your machine with a development server:

1. Clone this repository:
   ```bash
   git clone [https://github.com/McLovin312/Simon-Game.git](https://github.com/McLovin312/Simon-Game.git)
