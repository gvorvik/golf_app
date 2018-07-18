import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        }
    }

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    registerUser = (event) => {
        event.preventDefault();
        console.log('user submitted!');
        this.setState({
            firstName: '',
            lastName: '',
            username: '',
            password: '',
        })
    }

    render() {
        return (
            <div>
                <h1>Register User</h1>
                <form onSubmit={this.registerUser}>
                    <label htmlFor="usernameInput">First Name:
                        <input type="text" name="firstName" value={this.state.firstName} id="firstNameInput" onChange={this.handleInputChange} />
                    </label>
                    <label htmlFor="usernameInput">Last Name:
                        <input type="text" name="lastName" value={this.state.lastName} id="lastNameInput" onChange={this.handleInputChange} />
                    </label>
                    <label htmlFor="usernameInput">Username:
                        <input type="text" name="username" value={this.state.username} id="usernameInput" onChange={this.handleInputChange} />
                    </label>
                    <label htmlFor="passwordInput">Password:
                        <input type="password" name="password" value={this.state.password} id="passwordInput" onChange={this.handleInputChange} />
                    </label>
                    <input type="submit"/>
                </form>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default Register;