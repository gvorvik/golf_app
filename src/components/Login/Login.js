import React, {Component} from 'react';
import {connect} from 'react-redux';
import USER_ACTIONS from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user.userReducer,
  });

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.username) {
          this.props.history.push('/home');
        }
      }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    login = (event) => {
        event.preventDefault();      
        if(this.state.username === '' || this.state.password === '') {
            return alert('please complete both fields!');
        }
        let objectToSend = {
            username: this.state.username,
            password: this.state.password,
        }
        this.props.dispatch({
            type: USER_ACTIONS.LOG_IN,
            payload: objectToSend,
        })

        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
        <div id="logInPage">
            <form onSubmit={this.login} id="logInForm">
                <h1>Please Log In</h1>
                <div className="form-input">
                    <label htmlFor="usernameInput">Username:
                        <input type="text" name="username" value={this.state.username} id="usernameInput" onChange={this.handleChange}/>
                    </label>
                </div>
                <div className="form-input">
                    <label htmlFor="passwordInput">Password:
                        <input type="password" name="password" value={this.state.password} id="passwordInput" onChange={this.handleChange}/>
                    </label>
                </div>
                <input type="submit"/>
                <a href="/register">Register</a>
            </form>
        </div>
    )
    }
}

export default connect(mapStateToProps)(Login)