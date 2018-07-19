import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

const NavBar = (props) => {
    let content = null;

    const logout = () => {
        props.dispatch({ type: 'LOG_OUT' });
    }

    if (props.user.username) {
        content = (
            <div id="navbar">
                <h1>Hello {props.user.username}</h1>
                <ul id="navbarList">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/newscore'>Add New Score</Link></li>
                    <li><Link to='/newcourse'>Add New Course</Link></li>
                    <li><Link to='/login' onClick={logout}>Log Out</Link></li>
                </ul>
            </div>
        )
    }

    return content;
}

export default connect(mapStateToProps)(NavBar);