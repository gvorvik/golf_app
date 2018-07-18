import React, { Component } from 'react';
import { DatePicker } from 'material-ui-pickers';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';


class NewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: '',
            selectedDate: new Date(),
        }
    }

    handleChange = (event) => {
        this.setState({
            courseName: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    }

    render() {
        const { selectedDate } = this.state;

        return (
            <MuiPickersUtilsProvider utils={MomentUtils}>
            <div>
                <h2>Enter a New Course</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Course Name:
                    <input onChange={this.handleChange} name="courseName" type="text" />
                        Date Played:
                    <DatePicker
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            animateYearScrolling={false}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </div>
            </MuiPickersUtilsProvider>
        )
    }
}

export default NewCourse;