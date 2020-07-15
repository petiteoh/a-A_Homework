import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, value) {
        // debugger;
        // event.stopPropagation();
        //alt key was pressed at the time of click, they are trying to flag
        //else they are revealing the time
        const flagged = event.altKey
        this.props.updateGame(this.props.tile, flagged);
    }

    render() {
        let icon = "";
        if (this.props.tile.flagged) {
            icon = "⚑";
        } else if (this.props.tile.explored && this.props.tile.bombed) {
            icon = this.props.tile.adjacentBombCount();
        } else if (this.props.tile.explored && !this.props.tile.bombed) {
            icon = "🧨";
            this.props.tile.bombed = true;
        }

        return (
        <li onClick={this.handleClick}>{icon}</li>
        )}
}

export default Tile;