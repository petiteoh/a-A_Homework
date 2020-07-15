import React from 'react';
import Tile from './tile';
import * as mineTile from '../minesweeper';


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tile: new mineTile.Tile()}
    }

    
    render() {
        return (
            <div className='minesweeper'>
                <h1>Minesweeper</h1>
                <h4>Click to explore a tile.</h4>
                <h4>Alt + click to flag a tile.</h4>
                <span>
                    <p className='tile'>
                        {this.props.boardState.grid.map((arr) => {
                            return arr.map((tile, idx) => {
                                return <Tile updateGame={this.props.updateGame} tile={tile} key={idx} />;
                            });
                        })}
                    </p>
                </span>
            </div>
        );
    }
 }



export default Board;