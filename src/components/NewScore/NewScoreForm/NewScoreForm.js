import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    myCourses: state.course.myCourses,
});

const NewScoreForm = (props) => {
    let courses = props.myCourses.map((course, i) => {
        return <option key={i} value={course.id} name={course.name}>{course.name}</option>;
    });

    return (
    <div>
        <form>
            <h3>Details</h3>
            <label>Course Name</label>
            <select onChange={props.setSelectedCourse} defaultValue="default">
                <option disabled value="default">-Select An Option-</option>
                {courses}
            </select>
            <label>Date Played</label>
            <input type="date"/>
        </form>
    </div>
    )
}

export default connect(mapStateToProps)(NewScoreForm);