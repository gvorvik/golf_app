import React, {Component} from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    user: state.user.userReducer,
  });
class HomePage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h1>Hello Home Page</h1>
                <h2>Current User: {this.props.user.username}</h2>
            </div>
        );
    };
}

export default connect(mapStateToProps)(HomePage);
