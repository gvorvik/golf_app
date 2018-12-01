import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewCourseInformation from './NewCourseInformation/NewCourseInformation';
import HoleInformation from './HoleInformation/HoleInformation';
import COURSE_ACTIONS from '../../../redux/actions/courseActions';


class NewCourseEntry extends Component {

    state = {
        step: 1,
        holeStep: 1,
        courseName: '',
        courseCity: '',
        numberOfHoles: '',
        holeInformation: {},
    }

    nextStep = (event) => {
        event.preventDefault();
        if(this.state.numberOfHoles === '') {
            return alert('You must select 9 or 18 holes');
        }
        this.setState({
            step: this.state.step+1,
        });
    }

    nextHole = () => {
        this.setState({
            holeStep: this.state.holeStep+1
        });
    }

    previousHole = () => {
        if(this.state.holeStep === 1) {
            return this.setState({
                step: 1
            });
        }
        this.setState({
            holeStep: this.state.holeStep-1
        });
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

    addHoleToList = (obj) => {
        let holeInfo = {
            holeNumber: obj.holeNumber,
            par: Number(obj.par),
            yardage: Number(obj.yardage),
            handicap: Number(obj.handicap)
        };
        this.setState({
            holeInformation: {...this.state.holeInformation, [obj.holeNumber]: holeInfo}
        });
        this.nextHole();
    }

    submitCourse = () => {
        let action = {
            type: COURSE_ACTIONS.ADD_COURSE,
            payload: {
                name: this.state.courseName,
                city: this.state.courseCity,
                numberOfHoles: this.state.numberOfHoles,
                holeInformation: this.state.holeInformation
            },
        };
        this.props.dispatch(action);

        this.setState({
            step: 1,
            holeStep: 1,
            courseName: '',
            courseCity: '',
            numberOfHoles: '',
            holeInformation: []
        });
    }


    render() {
        switch (this.state.step) {
            case 1:
                return <NewCourseInformation 
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            parentState={this.state}
                            courseName={this.state.courseName}
                            courseCity={this.state.courseCity}
                            courseHoles={this.state.numberOfHoles}
                        />
            case 2:
                return <HoleInformation 
                            nextStep={this.nextStep}
                            previousStep={this.previousStep}
                            handleChange={this.handleChange}
                            addHoleToList={this.addHoleToList}
                            holeStep={this.state.holeStep}
                            nextHole={this.nextHole}
                            previousHole={this.previousHole}
                            numberOfHoles={Number(this.state.numberOfHoles)}
                            courseName={this.state.courseName}
                            courseCity={this.state.courseCity}
                            holeInformation={this.state.holeInformation}
                            submitCourse={this.submitCourse}
                        />
            default:
                return <NewCourseInformation />
        }
    }
}

export default connect()(NewCourseEntry);