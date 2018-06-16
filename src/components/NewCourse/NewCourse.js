import React, { Component } from 'react';
import NewCourseInformation from './NewCourseInformation/NewCourseInformation';
import HoleInformation from './HoleInformation/HoleInformation';


class NewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({});
    }

    render() {
        return (
            <div>
                <NewCourseInformation/>
                <HoleInformation/>
            </div>
        )
    }
}

export default NewCourse;