# The Simon Game
This project is a simple implementation of the classic Simon game.
The game challenges players to memorize and reproduce a sequence of colors and sounds.
I created the background image using Figma, but the sound files are from The Complete 2024 Web Development Bootcamp taught by Dr. Angela Yu.
## Features
- Four colored buttons (green, yellow, red, blue) that light up and play a sound.
- Random sequence generation for the player to follow.
- Pattern comparison to check the players's input.
- Game over state with reset functionality.

## Objective:
The objective is to correctly recall and reproduce an increasing sequence of colors generated by the game.

### Starting the Game:
Press any key on the keyboard to start the game.
The game will indicate that it has begun, and the current level will be displayed.

### Computer's Turn:
The computer will generate a random color sequence and display it one color at a time.
Each color will flash and play a corresponding sound. 

### User's Turn:
After the computer has displayed the color sequence, the player must reproduce the same sequence by clicking on the colored buttons in the same order as the computer.
Each button click will play the corresponding sound and animate the button.

### Progressing to the Next Level:
If the player successfully reproduces the entire sequence, the game progresses to the next level.
The player will receive a new color added to the sequence, which they must remember and reproduce in the next round.

### Game Over:
If the player clicks the wrong color or the sequence is incorrect, the game will end.
The game will display a "Game Over" message and play a wrong sound.
The player can start a new game by pressing any key on the keyboard.

### Tips for Success:
Pay close attention to the sequence displayed by the computer.
Take your time to recall the sequence before clicking on the buttons.
With each level, an additional color is added to the sequence, so the game becomes progressively more challenging.

### Controls:
Keyboard: Press any key to start or restart the game.
Mouse/Touch: Click on the colored buttons to reproduce the sequence during the user's turn.
Button Flash: The buttons will flash and play a sound when clicked or displayed in the sequence.

<div align="center"><img src="https://github.com/TFR25/TheSimonGame/blob/main/images/Game_Img.png" | height=400></div>
