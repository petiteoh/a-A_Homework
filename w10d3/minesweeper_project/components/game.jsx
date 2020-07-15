import React from 'react';
import { Board } from '../minesweeper';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.board = new Board();
    }

    updateGame() {

    }

    render() {
    return <li onClick={this.updateGame} state={this.state.board}>Game</li>
    // return (<h1>HELLOOOOO DO YOU SEE ME?</h1>)
    }
}

export default Game;