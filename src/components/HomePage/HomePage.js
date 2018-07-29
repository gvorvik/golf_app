import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import NavBar from './../NavBar/NavBar';
import USER_ACTIONS from '../../redux/actions/userActions';
import RecentScores from './RecentScores/RecentScores';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recentScores: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getRecentScores();
    }

    getRecentScores = () => {
        axios({
            method: 'GET',
            url: '/api/score/recentscores'
        })
        .then(response => this.setState({recentScores: response.data}))
        .catch(err=>console.log(err));
    }

    render() {
        let content = null;

        if (this.props.user.username) {
            content = (
            <div>
                <RecentScores
                    recentScores={this.state.recentScores}
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
