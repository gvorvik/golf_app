import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
    scoreReducer: state.score.scoreReducer,
});

class MyScores extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    render() {
        let content = null;
        if(this.props.user.username) {
            content = (
                <div id="myScoresDiv">
                    <form>
                        <h2>Search Scores</h2>
                    </form>
                    <a href="/newscore">Add New Score</a>
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

export default connect(mapStateToProps)(MyScores);