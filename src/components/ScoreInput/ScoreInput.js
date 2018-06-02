import React, { Component } from 'react';
import { connect } from 'react-redux';



const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class ScoreInput extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'RECORD_SCORE',
            payload: {[event.target.name]: Number(event.target.value)},
        });
    }


    render() {
        let totalScore = 0;

        for(let thing in this.props.reduxState.scoreReducer) {
            totalScore = totalScore + this.props.reduxState.scoreReducer[thing];
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

export default connect(mapReduxStateToProps)(ScoreInput);