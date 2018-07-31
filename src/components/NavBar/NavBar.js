import React from 'react';
import { Link } from 'react-router-dom';
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
            <div id="navbar">
                <h1>Hello {props.user.username}</h1>
                <ul id="navbarList">
                    <li><Link to='/home'>Dashboard</Link></li>
                    <li><Link to='/newscore'>Add New Score</Link></li>
                    <li><Link to='/courses'>My Courses</Link></li>
                    <li><Link to='/login' onClick={logout}>Log Out</Link></li>
                </ul>
            </div>
        )
    }

    return content;
}

export default connect(mapStateToProps)(NavBar);