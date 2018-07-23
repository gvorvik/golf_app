import React, {Component} from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';
import NewScoreForm from './NewScoreForm/NewScoreForm';
import USER_ACTIONS from '../../redux/actions/userActions';
import COURSE_ACTIONS from '../../redux/actions/courseActions';
import Scorecard from './Scorecard/Scorecard';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});
class NewScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: ''
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    setSelectedCourse = (event) => {
        this.props.dispatch({
            type: COURSE_ACTIONS.GET_HOLE_INFO,
            payload: event.target.value
        });
    }

    render() {
        let content = null;
        if(this.props.user.username) {
            content = (
                <div>
                    <h1>New Score</h1>
                    <NewScoreForm
                        setSelectedCourse={this.setSelectedCourse}
                    />
                    <Scorecard />
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