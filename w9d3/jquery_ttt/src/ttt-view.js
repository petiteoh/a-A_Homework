const Game = require("./ttt-game")

const CONSTANTS = {
  BOARD_DIM: 3,
}

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.dim = CONSTANTS.BOARD_DIM;
    this.setupBoard();
    this.bindEvents();
    this.hasDiagMatch();
    this.hasRowMatch();
    this.hasColumnMatch();
  }

  // draw condition: all tiles are filled
  // win condition: 3 in a row/column/diagonal of same mark
  playerWon(player) {
    
    // return true if player has 3 in row/col/diag
  }

  hasDiagMatch(player){
    let board = [];

    $(".tile").each((index, el) => {
      board.push($(el).text());
    })
    // alert(board[0] === "" ? "empty" : board[0])

    const board2D = [];
    while(board.length) { 
      board2D.push(board.splice(0,this.dim)); 
    }

    // check left to right
    let leftRight = true;
    for (let i = 0; i < this.dim; i++) {
      if (board2D[i][i] !== player) { leftRight = false }
    }

    // check right to left
    let col = this.dim - 1;
    let rightLeft = true;
    for (let i = 0; i < this.dim; i++) {
      if (board2D[i][col] !== player) { rightLeft = false }
      col--;
    }

    // for(let i = 0; i < 3; i++){
    //   for(let j = 0; j < 3; j++) {
    //     if (i === j) {
    //       if (board2D[i][j] !== player) {
    //         leftRight = false;
    //       }
    //     }

    //     if (board2D.length - i - 1 === j){
    //       if (board2D[i][j] !== player) {
    //         rightLeft = false;
    //       }
    //     }
    //   }
    // }

    return (leftRight || rightLeft);
  }

  hasRowMatch(player){
    let board = [];
    $(".tile").each((index, el) => {
      board.push($(el).text());
    })

    const board2D = [];
    
    
    while (board.length) {
      // board2D.push(board.splice(0, 3));
      if (board.splice(0,3).every(markCheck => markCheck === player)) {
        return true;
      }
    }
    return false;
  }

  hasColumnMatch(player) {
    let board = [];
    $(".tile").each((index, el) => {
      board.push($(el).text());
    })

    const board2D = [];
    while (board.length) {
      board2D.push(board.splice(0, this.dim));
    }

    let transposed = board2D[0].map((_, colIndex) => board2D.map(row => row[colIndex]));

    for(let i = 0; i < transposed.length; i++) {
      if (transposed[i].every(mark => mark === player)) {
        return true;
      }
    }
    return false;

    // while (transposed.length) {
    //   // board2D.push(board.splice(0, 3));
    //   if (board.splice(0,3).every(markCheck => markCheck === player)) {
    //     return true;
    //   }
    // }
    // return false;
  }

  bindEvents() {
    $("li").on("click", event => {
      const $target = $(event.target);
      $target.addClass("clicked");
      this.game.playMove($target, p => {
        if (this.hasDiagMatch(p) || this.hasRowMatch(p) || this.hasColumnMatch(p)) {
          alert(p + " won!")
        } 
      });
      let tiles = [];
      $("li").each((index, el) => {
        if ($(el).text().length > 0){
          tiles.push($(el).text());
        }
      })
      if (tiles.length === this.dim * this.dim) {
        alert("It is a draw!")
      }
    })
  }

  makeMove($square) {
    this.game.playMove();
  }

  setupBoard() {
    const $newUl = $('<ul></ul>');
    for (let i  = 0; i < this.dim * this.dim; i++){
      const $square = $("<li></li>");
      $square.addClass("tile");
      $newUl.append($square);
    }
    this.$el.append($newUl);
  }
}

module.exports = View;
