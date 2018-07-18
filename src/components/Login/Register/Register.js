import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Register User</h1>
                <form>
                    <label htmlFor="usernameInput">First Name:
                        <input type="text" name="firstName" id="firstNameInput" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="usernameInput">Last Name:
                        <input type="text" name="lastName" id="lastNameInput" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="usernameInput">Username:
                        <input type="text" name="username" id="usernameInput" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="passwordInput">Password:
                        <input type="password" name="password" id="passwordInput" onChange={this.handleChange} />
                    </label>
                </form>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default Register;