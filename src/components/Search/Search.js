import React, { Component } from 'react';
import HoleHistory from './HoleHistory/HoleHistory';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return <div>
            <h1>Search</h1>
            <HoleHistory />
        </div>
    }
}

export default Search;