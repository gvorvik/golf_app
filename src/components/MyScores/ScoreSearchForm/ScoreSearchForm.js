import React from 'react';

const ScoreSearchForm = (props) => {
    let courses = props.courses.map(course => <option key={course.id} value={course.id}>{course.name}</option>);
    return (
        <form id="scoreSearchForm">
        <h2>Search Scores</h2>
        <label htmlFor="scoreByCourse">
            Course:
            <select onChange={props.handleChange} defaultValue="default" name="selectedCourseID">
                <option disabled value="default">-Select An Option-</option>
                {courses}
            </select>
        </label>
    </form>
    )
}

export default ScoreSearchForm;