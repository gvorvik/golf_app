import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
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
        axios({
            method: 'POST',
            url: '/api/login',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });

        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
        <div>
            <h1>Hello Login</h1>
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

export default Login