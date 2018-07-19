import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from './../NavBar/NavBar';

const mapStateToProps = state => ({
    user: state.user.userReducer,
});

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    render() {
        let content = null;

        if (this.props.user.username) {
            content = (
            <div>
                <h1>Hello Home Page</h1>
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
