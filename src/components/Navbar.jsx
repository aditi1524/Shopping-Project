import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark justify-content-between">
          <a className="navbar-brand text-white">DevConnector</a>
          <ul className="navbar list-unstyled">
            <li className="nav-item">
              <a href="www.google.com" className="nav-link text-white">
                Developers
              </a>
            </li>
            <li className="nav-item">
              <a href="www.google.com" className="nav-link text-white">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="www.google.com" className="nav-link text-white">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
