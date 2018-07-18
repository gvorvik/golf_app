import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

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
            type: 'LOG_IN',
            payload: objectToSend,
        })

        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={this.login}>
                <label htmlFor="usernameInput">Username:
                    <input type="text" name="username" value={this.state.username} id="usernameInput" onChange={this.handleChange}/>
                </label>
                <label htmlFor="passwordInput">Password:
                    <input type="password" name="password" value={this.state.password} id="passwordInput" onChange={this.handleChange}/>
                </label>
                <input type="submit"/>
            </form>
            <Link to="/register">Register</Link>
        </div>
    )
    }
}

export default connect(mapStateToProps)(Login)