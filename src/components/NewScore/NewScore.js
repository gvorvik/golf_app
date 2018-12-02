import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import Scorecard from './Scorecard/Scorecard';
import NewScoreForm from './NewScoreForm/NewScoreForm';
import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});
class NewScore extends Component {

    state = {
        selectedCourseId: '',
        date: '',
        scores: {}
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    setSelectedCourse = (event) => {
        this.setState({
            selectedCourseId: Number(event.target.value)
        })
    }

    setDate = (event) => {
        let date = moment(event.target.value).format('MM-DD-YYYY');
        this.setState({
            date,
        })
    }

    handleScoreChange = (event) => {
        this.setState({
            scores: {...this.state.scores, [event.target.name]: Number(event.target.value)}
        })
    }

    handleSubmit = (number) => {
        let totalScore = 0;

        if (this.state.date === '') {
            return alert('Please select a date');
        }

        if (Object.keys(this.state.scores).length !== number) {
            return alert('You need a score for every hole');
        }

        for (let score in this.state.scores) {
            console.log(this.state.scores[score])
            if (this.state.scores[score] <= 0 || this.state.scores[score] === null || this.state.scores[score] === undefined) {
                return alert('You cannot have a score below 1 on a hole');
            }
            totalScore = totalScore + this.state.scores[score];
            console.log(totalScore);
        }

        // this.props.history.push('/home');
    }

    render() {
        let content = null;

        if (this.props.user.username) {
            content = (
                <div id="new-score-div">
                    <NewScoreForm
                        setDate={this.setDate}
                        id={this.state.selectedCourseId}
                        setSelectedCourse={this.setSelectedCourse}
                    />
                    <Scorecard
                        handleSubmit={this.handleSubmit}
                        selectedCourseId={this.state.selectedCourseId}
                        scores={this.state.scores}
                        handleScoreChange={this.handleScoreChange}
                    />
                </div>
            )
        }

        return (
            <div>
                <NavBar />
                {content}
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewScore);