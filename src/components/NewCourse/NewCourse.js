import React, { Component } from 'react';
import NewCourseInformation from './NewCourseInformation/NewCourseInformation';
import HoleInformation from './HoleInformation/HoleInformation';


class NewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            courseName: '',
            courseCity: '',
            numberOfHoles: '',
        }
    }

    nextStep = (event) => {
        event.preventDefault();
        this.setState({
            step: this.state.step+1,
        })
    }

    previousStep = (event) => {
        event.preventDefault()
        this.setState({
            step: this.state.step-1,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {

        switch (this.state.step) {
            case 1:
                return <NewCourseInformation 
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            parentState={this.state}
                        />
            case 2:
                return <HoleInformation 
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            handleChange={this.handleChange}
                            numberOfHoles={Number(this.state.numberOfHoles)}
                        />
            default:
                return <NewCourseInformation />
        }
    }
}

export default NewCourse;