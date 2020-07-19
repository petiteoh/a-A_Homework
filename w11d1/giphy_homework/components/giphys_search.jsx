import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: 'jack russell' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchSearchGiphys('jack+russell');
    }

    // updates the search term state when a user types in the input field
    handleChange(e) {
        this.setState({ searchTerm: e.currentTarget.value });
    }

    // fetches giphys when the submit button is clicked
    handleSubmit(e) {
        e.preventDefault();
        let searchTerm = this.state.searchTerm.split(' ').join('+');
        this.props.fetchSearchGiphys(searchTerm);
    };

    render() {
        let { giphys } = this.props;

        return (
            <div>
                <form className="search-bar">
                    <input value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
                </form>
                <GiphysIndex giphys={giphys} />
            </div>
        );
    }
}

export default GiphysSearch;