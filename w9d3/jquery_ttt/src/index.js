const View = require("./ttt-view");// require appropriate file
const Game = require("./ttt-game");// require appropriate file

window.Game = Game;
window.View = View;

  $(() => {
    // Your code here
    let game = new Game();
    let $el = $(".ttt");
    new View(game, $el)
  });
