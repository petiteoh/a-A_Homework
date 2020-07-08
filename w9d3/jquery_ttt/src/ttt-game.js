class Game {
    constructor() {
        this.currentPlayer = "x";
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === "x" ? "o" : "x"; 
    }
    // alternate player moves
    
    playMove($tile, checkwon) {
        // change tile color
        // add x or o text to tile
        // switch player
        if ($tile.text() === "") {
            $tile.text(this.currentPlayer);

            //callback to methods in ttt-view
            checkwon(this.currentPlayer);

            this.switchPlayer();
        }
    }
}

module.exports = Game;