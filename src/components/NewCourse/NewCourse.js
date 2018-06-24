import React, { Component } from 'react';
import NewCourseInformation from './NewCourseInformation/NewCourseInformation';
import HoleInformation from './HoleInformation/HoleInformation';
import SummaryOfNewCourse from './NewCourseSummary/NewCourseSummary';


class NewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            holeStep: 1,
            courseName: '',
            courseCity: '',
            numberOfHoles: '',
            holeInformation: []
        }
    }

    nextStep = (event) => {
        event.preventDefault();
        this.setState({
            step: this.state.step+1,
        });
    }

    nextHole = () => {
        this.setState({
            holeStep: this.state.holeStep+1
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
                            addHoleToList={this.addHoleToList}
                            holeStep={this.state.holeStep}
                            nextHole={this.nextHole}
                            numberOfHoles={Number(this.state.numberOfHoles)}
                        />
            case 3:
                return <SummaryOfNewCourse 
                            courseName={this.state.courseName}
                            courseCity={this.state.courseCity}
                            numberOfHoles={this.state.numberOfHoles}
                            holeInformation={this.state.holeInformation}
                        />
            default:
                return <NewCourseInformation />
        }
    }
}

export default NewCourse;