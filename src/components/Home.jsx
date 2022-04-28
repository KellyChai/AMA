import React, { Component } from "react";
import "./style/Home.scss";
import { NavLink } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Automated Assessment Marking System</h1>
            <p className="card-text">
              Mark your assessment within seconds Tired of marking hundreds of
              papaers at once with in a limited time? Join us and save your time
              as this system marks all the papers automatically.
            </p>
            <NavLink className="navbar-brand btn" to="/">
              SIGNUP
            </NavLink>
          </div>
        </div>
        <div className="card">
          <img
            src="https://lipstiq.com/wp-content/uploads/2018/03/NWKA-.jpg"
            alt="..."
            width="100%"
            height="auto"
          />
        </div>
      </div>
    );
  }
}

export default Home;

// function Home() {
//   return (
//     <div>
//       <img
//         src="https://lipstiq.com/wp-content/uploads/2018/03/NWKA-.jpg"
//         alt="Image"
//         width="100"
//         height="auto"
//       />
//       <div>
//         <h5>Welcome to AMA System!</h5>
//         <p>
//           We are from Taylor's University Capstone Project Module, this is a
//           prototype design website, meaning it is still under development,
//           however the login authentication are functionable.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;
