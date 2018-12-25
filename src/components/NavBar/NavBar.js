import React from 'react';
import { connect } from 'react-redux';
import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

const NavBar = (props) => {
    let content = null;

    const logout = () => {
        props.dispatch({ type: USER_ACTIONS.LOG_OUT });
    }

    if (props.user.username) {
        content = (
            <div className="navbar">
                <h1>Hello {props.user.username}</h1>
                <ul className="navbar__list-items">
                    <li><a href='/home'>Dashboard</a></li>
                    <li><a href='/search'>Search</a></li>
                    <li><a href='/scores'>My Scores</a></li>
                    <li><a href='/courses'>My Courses</a></li>
                    <li><a href='/login' onClick={logout}>Log Out</a></li>
                </ul>
            </div>
        )
    }

    return content;
}

export default connect(mapStateToProps)(NavBar);