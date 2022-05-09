import React, { Component } from "react";

class Password extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Password</h3>
        <form method="post" action="/password" className="mb-2">
          <div className="form-group">
            <label for="username">Username*</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter Your Username"
              Required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="pass1">Password*</label>
            <input
              type="password"
              className="form-control"
              id="pass1"
              name="pass1"
              placeholder="Enter Your Password"
              Required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default Password;
