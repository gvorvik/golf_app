import React, { Component } from 'react';


class ScoreInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
            11: '',
            12: '',
            13: '',
            14: '',
            15: '',
            16: '',
            17: '',
            18: '',
            total: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {

        return (
            <tr>
                <td>Score</td>
                <td><input onChange={this.handleChange} name="1" type="number" /></td>
                <td><input onChange={this.handleChange} name="2" type="number" /></td>
                <td><input onChange={this.handleChange} name="3" type="number" /></td>
                <td><input onChange={this.handleChange} name="4" type="number" /></td>
                <td><input onChange={this.handleChange} name="5" type="number" /></td>
                <td><input onChange={this.handleChange} name="6" type="number" /></td>
                <td><input onChange={this.handleChange} name="7" type="number" /></td>
                <td><input onChange={this.handleChange} name="8" type="number" /></td>
                <td><input onChange={this.handleChange} name="9" type="number" /></td>
                <td><input onChange={this.handleChange} name="10" type="number" /></td>
                <td><input onChange={this.handleChange} name="11" type="number" /></td>
                <td><input onChange={this.handleChange} name="12" type="number" /></td>
                <td><input onChange={this.handleChange} name="13" type="number" /></td>
                <td><input onChange={this.handleChange} name="14" type="number" /></td>
                <td><input onChange={this.handleChange} name="15" type="number" /></td>
                <td><input onChange={this.handleChange} name="16" type="number" /></td>
                <td><input onChange={this.handleChange} name="17" type="number" /></td>
                <td><input onChange={this.handleChange} name="18" type="number" /></td>
                <td><input name="total" type="number" /></td>
            </tr>
        )
    }
}

export default ScoreInput;