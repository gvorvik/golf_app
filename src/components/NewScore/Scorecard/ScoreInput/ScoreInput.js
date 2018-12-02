import React, { Component } from 'react';

class ScoreInput extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (event) => {
        console.log('yooo');
    }

    render() {
        console.log(this.props);
        let totalScore = 0;
        let holeScores;

        if (this.props.getHoles) {
            holeScores = this.props.getHoles.map((hole, i) => {
                return <td className="score-cell" key={i}>
                    <input onChange={this.handleChange} name={hole.id} type="number" />
                </td>
            })
            holeScores = <tr><th scope="row">Score</th>{holeScores}<td>{totalScore}</td></tr>
            return holeScores;
        }
        
        return null;
    }
}

export default ScoreInput;