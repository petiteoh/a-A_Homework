import React from 'react';
import Board from './board';
import * as mineBoard from '../minesweeper';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {board: new mineBoard.Board(9, 5)} //object
        // this.board = new mineBoard.Board();
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        //flag it/ explore it/ or call set this to change the state of the board
        if (flagged === true) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }
        this.setState({board: this.state.board});
    }

    render() {
    // returning a react component and passing in props will be passed in the React Components constructor
    return <Board updateGame={this.updateGame} boardState={this.state.board} />
    // return (<h1>HELLOOOOO DO YOU SEE ME?</h1>)
    }
}

export default Game;