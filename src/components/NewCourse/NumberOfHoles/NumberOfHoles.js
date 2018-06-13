import React, { Component } from 'react';


class NumberOfHoles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numberOfHoles: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <div>
                    <form>
                        <label htmlFor="9Holes">9 Holes</label>
                        <input onChange={this.handleChange} type="radio" name="numberOfHoles" value="9" id="9Holes"/>
                        <label htmlFor="18Holes">18 Holes</label>
                        <input onChange={this.handleChange} type="radio" name="numberOfHoles" value="18" id="18Holes"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default NumberOfHoles;