import React, { Component } from 'react';
import { connect } from 'react-redux';
import {graphql} from 'react-apollo';

import NavBar from './../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import RecentScores from './RecentScores/RecentScores';
import DashboardInfo from './DashboardInfo/DashboardInfo';
import HomePageQuery from '../../queries/HomePageQuery';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    render() {
        let content = null;

        if(this.props.data.loading) {
            return <div>Loading...</div>
        }

        if (this.props.user.username) {
            content = (
                <div className="dashboard">
                    <RecentScores
                        recentScores={this.props.data.getAllRounds}
                    />
                    <DashboardInfo
                        totalRounds={this.props.data.getAllRounds.length}
                        topCourses={this.props.data.getSumRoundsPerCourse}
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

export default graphql(HomePageQuery)(connect(mapStateToProps)(HomePage));
