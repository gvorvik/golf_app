import React, { Component } from 'react';


class NewCourseInformation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseName: '',
            courseCity: '',
            courseState: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    nextComponent = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            courseName: '',
            courseCity: '',
            courseState: '',
        })
    }

    render() {

        return (
            <form onSubmit={this.nextComponent}>
                <h2>Let's start with the basics...</h2>
                <label>
                    Course Name:
                </label>
                <input onChange={this.handleChange} value={this.state.courseName} name="courseName" type="text" />
                <label>
                    City:
                </label>
                <input onChange={this.handleChange} value={this.state.courseCity} name="courseCity" type="text" />
                <label>
                    State:
                </label>
                <input onChange={this.handleChange} value={this.state.courseState} name="courseState" type="text" />
                <input type="submit" value="Next"/>
            </form>
        )
    }
}

export default NewCourseInformation;