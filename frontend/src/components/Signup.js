import React, { Component } from 'react';

export default class Signup extends Component {

    signup = (e) => {
        fetch('http://localhost:3001/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: e.target.parentElement.username.value,
                password: e.target.parentElement.password.value
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.username) {
                    alert(`New account made: ${data.username}`)
                }
                else {
                    alert(data)
                }
            })
    }

    render() {
        return (
            <div className="signupForm">
                <form>
                    <input placeholder="Username" name="username" required="" type="text" autoComplete="off" />
                    <input placeholder="Password" name="password" required="" type="password" />
                    <button type="button" onClick={this.signup}>SIGN UP</button>
                </form>
            </div>
        )
    }
}