import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBar from './../NavBar/NavBar';
import CourseDiv from './CourseDiv/CourseDiv';
import CourseDetailsModal from './CourseDetailsModal/CourseDetailsModal';

import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyCourses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myCourses: [],
            selectedCourseInfo: [],
            courseModal: {
                open: false,
            }
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
        .then(response=>{
            this.setState({selectedCourseInfo: response.data});
            this.openCourseModal();
    })
        .catch(err=>console.log(err));
    }

    openCourseModal = () => {
        this.setState({
            courseModal: {
                open: true,
            }
        });
    }

    closeCourseModal = () => {
        this.setState({
            courseModal: {
                open: false,
            }
        });
    }

    render() {
        let content = null;
        let courseDivs = this.state.myCourses.map(course => <CourseDiv 
            key={course.id} 
            course={course} 
            getCourseInformation={this.getCourseInformation}
        />);

        if (this.props.user.username) {
            content = (
            <div id="myCoursesDiv">
                <h1>My Courses</h1>
                <div>
                    {courseDivs}
                </div>
                <CourseDetailsModal 
                    selectedCourseInfo={this.state.selectedCourseInfo}
                    closeCourseModal={this.closeCourseModal}
                    showModal={this.state.courseModal.open}
                />
                <a className="addBtn" href="/newcourse">Add New Course</a>
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