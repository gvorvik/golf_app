import React, {Component} from 'react';
import ScoreInput from './ScoreInput/ScoreInput';

class NewScore extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ScoreInput />
            </div>
        )
    }
}

export default NewScore;