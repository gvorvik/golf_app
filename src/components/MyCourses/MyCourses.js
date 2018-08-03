import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBar from './../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import CourseDiv from './CourseDiv/CourseDiv';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyCourses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myCourses: [],
            selectedCourseInfo: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getCourses();
    }

    getCourses = () => {
        axios({
            method: 'GET',
            url: '/api/course/courses'
        })
        .then(response=>this.setState({myCourses: response.data}))
        .catch(err=>console.log(err));
    }

    getCourseInformation = (id) => {
        axios({
            method: 'GET',
            url: `/api/course/selectedcourse/${id}`
        })
        .then(response=>this.setState({selectedCourseInfo: response.data}))
        .catch(err=>console.log(err));
    }

    render() {
        let content = null;
        let courseDivs = this.state.myCourses.map(course => <CourseDiv 
            key={course.id} course={course} 
            getCourseInformation={this.getCourseInformation}
        />);

        if (this.props.user.username) {
            content = (
            <div id="myCoursesDiv">
                <h1>My Courses</h1>
                {courseDivs}
                <a href="/newcourse">Add New Course</a>
            </div>
            )
        }

        return (
            <div>
                <NavBar />
                {content}
            </div>
        );
    };
}

export default connect(mapStateToProps)(MyCourses);