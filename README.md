# Dynamic Quiz Base

Here you will find a boilerplate/template for a timed quiz or questionare. Styling is minimal to allow for loading of custom stylesheets or preferred frameworks such as bootstrap without having to refactor the code base completely. The main focus of this was to provide functional logic that could have styling applied without too much difficulty. 

### Features:

##### The quiz can be quickly adapted to include as many or as few questions as needed.

##### Local storage of player name and score. 
Local storage is used only to provide a basic framework for data collection of things like quiz results.  

##### Leaderboard displaying the top 5 local high scores.

##### Timeout functionality to limit how long the player has to complete the quiz.

##### Live score updates displayed as the player progresses.

##### One click quiz progression, as soon as an answer is selected the quiz moves to the next question whether its correct or not. 

##### Players are penalized for incorrect answers with a time remainging reduction of 10 seconds per incorrect answer. 
this add in the ability to add other penalties is needed, 

##### AVAP - as vanallia as possible
the code base is pure hard coded JS, HTML, and CSS on purpose. This way no matter what framework you prefer to use it wont be bothered by what was used to build it. Eventually I might decide make a node.js module based off the original vanilla version. 

![Alt text](./assets/images/_D__code-game_index.html%20(1).png)
![Alt text](./assets/images/_D__code-game_assets_subpages_game.html%20(1).png)


Live site:
https://cobalt88.github.io/code-game/
