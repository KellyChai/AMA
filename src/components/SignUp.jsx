import React, { Component } from "react";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Create your account!</h3>
        <form method="post" action="/signup">
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Create A Username (use only letters and numbers)"
              Required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="fname">First Name</label>
            <input
              type="text"
              className="form-control"
              id="fname"
              name="fname"
              placeholder="Enter Your First Name"
              Required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="lname">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              name="lname"
              placeholder="Enter Your Last Name"
              Required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              Required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="pass1">Password</label>
            <input
              type="password"
              className="form-control"
              id="pass1"
              name="pass1"
              placeholder="Create Your Password"
              Required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="pass2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="pass2"
              name="pass2"
              placeholder="Confirm Your Password"
              Required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
