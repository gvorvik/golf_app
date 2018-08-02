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
    <div id="new-score-form-div">
        <form id="new-score-form">
            <h2>Where'd you play?</h2>
            <div className="form-input">
                <label>Course Name</label>
                <select onChange={props.setSelectedCourse} defaultValue="default">
                    <option disabled value="default">-Select An Option-</option>
                    {courses}
                </select>
            </div>
            <div className="form-input">
                <label>Date Played</label>
                <input onChange={props.setDate} type="date"/>
            </div>
        </form>
    </div>
    )
}

export default connect(mapStateToProps)(NewScoreForm);