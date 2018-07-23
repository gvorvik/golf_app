import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    myCourses: state.course.myCourses,
});

const NewScoreForm = (props) => {
    let courses = props.myCourses.map((course, i) => {
        return <option key={i} name={course.name}>{course.name}</option>;
    });

    return (
    <div>
        <form>
            <h3>Details</h3>
            <label>Course Name</label>
            <select onChange={props.setSelectedCourse}>
                <option disabled selected></option>
                {courses}
            </select>
            <label>Date Player</label>
            <input type="date"/>
        </form>
    </div>
    )
}

export default connect(mapStateToProps)(NewScoreForm);