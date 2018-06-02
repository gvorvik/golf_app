import React, { Component } from 'react';


class ScoreInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hole1: 0,
            hole2: 0,
            hole3: 0,
            hole4: 0,
            hole5: 0,
            hole6: 0,
            hole7: 0,
            hole8: 0,
            hole9: 0,
            hole10: 0,
            hole11: 0,
            hole12: 0,
            hole13: 0,
            hole14: 0,
            hole15: 0,
            hole16: 0,
            hole17: 0,
            hole18: 0,
            total: 0,
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: Number(event.target.value),
        });
    }


    render() {

        let totalScore = 0;

        for(let thing in this.state) {
            totalScore += this.state[thing];
        };

        return (
            <tr>
                <td>Score</td>
                <td><input onChange={this.handleChange} name="hole1" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole2" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole3" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole4" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole5" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole6" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole7" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole8" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole9" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole10" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole11" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole12" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole13" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole14" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole15" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole16" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole17" type="number" /></td>
                <td><input onChange={this.handleChange} name="hole18" type="number" /></td>
                <td>{totalScore}</td>
            </tr>
        )
    }
}

export default ScoreInput;