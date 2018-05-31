import React, { Component } from 'react';
import { DatePicker } from 'material-ui-pickers';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';


class NewCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseName: '',
        }
    }

    handleChange = (event) => {

        this.setState({
            courseName: event.target.value,
            selectedDate: new Date(),
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Course Name:
                    <input onChange={this.handleChange} name="courseName" type="text" />
                        Date Played:
                    <DatePicker
                            label="Basic example"
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            animateYearScrolling={false}
                        />
                    </label>
                    <input type="submit" />
                </form>
            </MuiPickersUtilsProvider>
        )
    }
}

export default NewCourse;