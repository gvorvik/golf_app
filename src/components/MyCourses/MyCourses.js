import React, { Component } from 'react';
import { connect } from 'react-redux';
import {graphql, withApollo} from 'react-apollo';

import NavBar from './../NavBar/NavBar';
import CourseRow from './CourseRow/CourseRow';
import CourseDetailsModal from './CourseDetailsModal/CourseDetailsModal';
import myCoursesQuery from './../../queries/MyCoursesQuery';

import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyCourses extends Component {

    state = {
        selectedCourseInfo: [],
        selectedCourseId: 0,
        courseModal: { open: false }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    getCourseInformation = (id) => {
        this.props.client.query({
            query: myCoursesQuery,
            variables: {course_id: Number(id)}
        })
        .then( response => {
            this.setState({selectedCourseInfo: response.data.getHoles});
            this.openCourseModal();
        })
        .catch(err => err);
    }

    openCourseModal = () => {
        this.setState({
            courseModal: { open: true }
        });
    }

    closeCourseModal = () => {
        this.setState({
            courseModal: { open: false }
        });
    }

    render() {
        if(this.props.data.loading) {
            return <div></div>
        }
        let content = null;
        let courseRows = this.props.data.getCourses.map(course => <CourseRow 
            key={course.id} 
            course={course} 
            getCourseInformation={this.getCourseInformation}
        />);
        if (this.props.user.username) {
            content = (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Number of Holes</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseRows}
                    </tbody>
                </table>
                <CourseDetailsModal 
                    selectedCourseInfo={this.state.selectedCourseInfo}
                    closeCourseModal={this.closeCourseModal}
                    showModal={this.state.courseModal.open}
                />
                <div className="a__wrapper-important">
                    <a className="a a__important" href="/newcourse">Add New Course</a>
                </div>
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

export default withApollo(graphql(myCoursesQuery, {
    options: () => { return { variables: {course_id: 1} } }
})(connect(mapStateToProps)(MyCourses)));