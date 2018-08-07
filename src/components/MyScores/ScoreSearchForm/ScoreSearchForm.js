import React from 'react';

const ScoreSearchForm = (props) => {
    let courses = props.courses.map(course => <option key={course.id}>{course.name}</option>);
    return (
        <form id="scoreSearchForm">
        <h2>Search Scores</h2>
        <label htmlFor="scoreByCourse">
            Course:
            <select onChange={props.handleChange} id="scoreByCourse" defaultValue="default" name="selectedCourse">
                <option disabled value="default">-Select An Option-</option>
                {courses}
            </select>
        </label>
        <input onClick={props.submitSearch} type="submit"/>
    </form>
    )
}

export default ScoreSearchForm;