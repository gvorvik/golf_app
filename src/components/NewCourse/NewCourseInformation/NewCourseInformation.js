import React, { Component } from 'react';
import axios from 'axios';
import { COURSE_ACTIONS } from '../../../redux/actions/courseActions';
import { connect } from 'react-redux';



class NewCourseInformation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseName: '',
            courseCity: '',
            numberOfHoles: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    nextComponent = (event) => {
        event.preventDefault();
        if(this.state.courseName === '' || this.state.courseCity === '' || this.state.numberOfHoles === '') {
            return alert('You must complete all fields before continuing!');
        }

        const action = {
            type: COURSE_ACTIONS.SET_NEW_COURSE,
            payload: this.state,
        }

        this.props.dispatch(action);

        // axios({
        //     method: 'POST',
        //     url: '/api/course',
        //     data: this.state,
        // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch(err => console.log(err));

        this.setState({
            courseName: '',
            courseCity: '',
            numberOfHoles: '',
        });


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
                <div>
                    <label htmlFor="9Holes">9 Holes</label>
                    <input onChange={this.handleChange} checked={this.state.numberOfHoles==="9"} type="radio" name="numberOfHoles" value="9" id="9Holes"/>
                    <label htmlFor="18Holes">18 Holes</label>
                    <input onChange={this.handleChange} checked={this.state.numberOfHoles==="18"} type="radio" name="numberOfHoles" value="18" id="18Holes"/>
                </div>
                <input type="submit" value="Next"/>
            </form>
        )
    }
}

export default connect()(NewCourseInformation);