import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';

import NavBar from './../NavBar/NavBar';
import CourseRow from './CourseRow/CourseRow';
import CourseDetailsModal from './CourseDetailsModal/CourseDetailsModal';
import GetCourses from './../../queries/GetCourses';

import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class MyCourses extends Component {

    state = {
        selectedCourseId: null,
        courseModal: false
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    handleChange = (courseId) => {
        this.setState({
            selectedCourseId: Number(courseId)
        })
        this.openCourseModal();
    }

    openCourseModal = () => {
        this.setState({
            courseModal: true
        });
    }

    closeCourseModal = () => {
        this.setState({
            courseModal: false
        });
    }

    render() {
        return (
            <Query
                query={GetCourses}
            >
                {
                    ({ data = {}, loading }) => {
                        if (loading) {
                            return <div>Loading...</div>
                        }
                        let content = null;
                        if (this.props.user.username) {
                            let courseRows = data.getCourses && data.getCourses.map(course => <CourseRow
                                key={course.id}
                                course={course}
                                handleChange={this.handleChange}
                            />);
                            content = (
                                <div id="myCoursesDiv">
                                    <h1>My Courses</h1>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>City</th>
                                                <th>Length</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courseRows}
                                        </tbody>
                                    </table>
                                    <CourseDetailsModal
                                        closeCourseModal={this.closeCourseModal}
                                        showModal={this.state.courseModal}
                                        selectedCourseId={this.state.selectedCourseId}
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
                    }}
            </Query>
        )
    };
}

export default connect(mapStateToProps)(MyCourses);