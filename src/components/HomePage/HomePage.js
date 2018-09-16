import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBar from './../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import RecentScores from './RecentScores/RecentScores';
import DashboardInfo from './DashboardInfo/DashboardInfo';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class HomePage extends Component {

    state = {
        recentScores: [],
        totalRounds: 0,
        topCourses: [],
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getRecentScores();
        this.getTotalRounds();
        this.getTopCourses();
    }

    getRecentScores = () => {
        axios({
            method: 'GET',
            url: '/api/score/recentscores'
        })
        .then(response => this.setState({recentScores: response.data}))
        .catch(err=>console.log(err));
    }

    getTotalRounds = () => {
        axios({
            method: 'GET',
            url: '/api/score/totalrounds'
        })
        .then(response => this.setState({totalRounds: response.data.count}))
        .catch(err => console.log(err))
    }

    getTopCourses = () => {
        axios({
            method: 'GET',
            url: '/api/score/topcourses'
        })
        .then(response => this.setState({topCourses: response.data}))
        .catch(err => console.log(err));
    }

    render() {
        let content = null;

        if (this.props.user.username) {
            content = (
            <div>
                <RecentScores
                    recentScores={this.state.recentScores}
                />
                <DashboardInfo
                    totalRounds={this.state.totalRounds}
                    topCourses={this.state.topCourses}
                />
            </div>
            )
        }

        return (
            <div>
                <NavBar />
                {content}
            </div>
        );
    };
}

export default connect(mapStateToProps)(HomePage);
