import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewCourseInformation from './NewCourseInformation/NewCourseInformation';
import HoleInformation from './HoleInformation/HoleInformation';


class NewCourseEntry extends Component {

    state = {
        step: 1,
        courseName: '',
        courseCity: '',
        numberOfHoles: '',
        holeInformation: {},
    }

    nextStep = (e) => {
        e.preventDefault();
        if(this.state.numberOfHoles === "") {
            return alert('You must select 9 or 18 holes');
        }
        this.setState({
            step: this.state.step + 1,
        });
    }

    previousStep = (e) => {
        e.preventDefault()
        this.setState({
            step: this.state.step - 1,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitCourse = () => {
        this.setState({
            step: 1,
            courseName: '',
            courseCity: '',
            numberOfHoles: '',
            holeInformation: {}
        });
    }

    handleNewCourseInfoChange = (holeNumber, e) => {
        this.setState({
            holeInformation: {
                ...this.state.holeInformation,
                [holeNumber]:{
                    ...this.state.holeInformation[holeNumber],
                    [e.target.name]: e.target.value
                }
            }
        })
    }


    render() {
        switch (this.state.step) {
            case 1:
                return <NewCourseInformation 
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            courseName={this.state.courseName}
                            courseCity={this.state.courseCity}
                        />
            case 2:
                return <HoleInformation 
                            previousStep={this.previousStep}
                            numberOfHoles={Number(this.state.numberOfHoles)}
                            courseName={this.state.courseName}
                            courseCity={this.state.courseCity}
                            holeInformation={this.state.holeInformation}
                            submitCourse={this.submitCourse}
                            handleNewCourseInfoChange={this.handleNewCourseInfoChange}
                        />
            default:
                return <NewCourseInformation />
        }
    }
}

export default connect()(NewCourseEntry);