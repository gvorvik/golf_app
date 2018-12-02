import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import Scorecard from './Scorecard/Scorecard';
import NewScoreForm from './NewScoreForm/NewScoreForm';
import USER_ACTIONS from '../../redux/actions/userActions';
import COURSE_ACTIONS from '../../redux/actions/courseActions';
import SCORE_ACTIONS from '../../redux/actions/scoreActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
    scoreReducer: state.score.scoreReducer,
    holeInfo: state.score.holeInfo,
});
class NewScore extends Component {

    state = {
        selectedCourseId: '',
        date: '',
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: SCORE_ACTIONS.CLEAR_SCORES });
        this.props.dispatch({ type: COURSE_ACTIONS.CLEAR_COURSE_INFO })
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

    handleSubmit = () => {
        let totalScore = 0;

        if (this.state.date === '') {
            return alert('Please select a date');
        }

        if (Object.keys(this.props.scoreReducer).length !== this.props.holeInfo.length) {
            return alert('You need a score for every hole');
        }

        for (let score in this.props.scoreReducer) {
            if (this.props.scoreReducer[score] <= 0 || this.props.scoreReducer[score] === null || this.props.scoreReducer[score] === undefined) {
                return alert('You cannot have a score below 1 on a hole');
            }
            totalScore = totalScore + this.props.scoreReducer[score];
        }

        let objectToSend = {
            scores: this.props.scoreReducer,
            courseID: this.state.selectedCourseId,
            date: this.state.date,
            totalScore,
        }

        this.props.dispatch({
            type: SCORE_ACTIONS.SUBMIT_SCORE,
            payload: objectToSend,
        });

        this.props.history.push('/home');
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