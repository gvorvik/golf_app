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
            scores: {},
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
                        handleScoreChange={this.handleScoreChange}
                        date={this.state.date}
                        scores={this.state.scores}
                        history={this.props.history}
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