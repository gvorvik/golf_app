import React, {Component} from 'react';
import axios from 'axios';
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
});
class NewScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourseId: '',
            date: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({type: SCORE_ACTIONS.CLEAR_SCORES});
        this.props.dispatch({type: COURSE_ACTIONS.CLEAR_COURSE_INFO})
        this.getCourses();
    }

    getCourses = () => {
        axios({
            method: 'GET',
            url: '/api/course/courses'
        })
        .then(response=>{
            let courses = response.data;
            this.props.dispatch({
                type: COURSE_ACTIONS.ADD_MY_COURSES,
                payload: courses,
            });
        })
        .catch(err=>console.log(err))
    }

    setSelectedCourse = (event) => {
        this.props.dispatch({
            type: COURSE_ACTIONS.GET_HOLE_INFO,
            payload: event.target.value
        });
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
        for (let score in this.props.scoreReducer) {
            if (this.props.scoreReducer[score] <= 0) {
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
        if(this.props.user.username) {
            content = (
                <div id="new-score-div">
                    <NewScoreForm
                        setSelectedCourse={this.setSelectedCourse}
                        setDate={this.setDate}
                    />
                    <Scorecard 
                        handleSubmit={this.handleSubmit}
                    />
                </div>
            )
        }

        return (
            <div>
                <NavBar/>
                {content}
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewScore);