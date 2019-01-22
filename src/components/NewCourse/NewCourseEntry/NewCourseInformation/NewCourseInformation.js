import React from 'react';


const NewCourseInformation = (props) => {

        return <form onSubmit={props.nextStep}>
                <h2>Let's start with the basics...</h2>
                <label>
                    Course Name:
                </label>
                <input onChange={props.handleChange} value={props.courseName} name="courseName" type="text" />
                <label>
                    City:
                </label>
                <input onChange={props.handleChange} value={props.courseCity} name="courseCity" type="text" />
                <div>
                    <label htmlFor="9Holes">9 Holes</label>
                    <input onChange={props.handleChange} type="radio" name="numberOfHoles" 
                        value="9" id="9Holes"/>
                    <label htmlFor="18Holes">18 Holes</label>
                    <input onChange={props.handleChange} type="radio" name="numberOfHoles" 
                        value="18" id="18Holes"/>
                </div>
                <input type="submit" value="Next"/>
            </form>
}

export default NewCourseInformation;