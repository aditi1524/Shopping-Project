import React, { Component } from "react";
import "./cssFolder/Coverr.css";
export default class Cover extends Component {
  render() {
    return (
      <div className="fluid-container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            MyApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link text-white" href="www.googler.com">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  View2
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <input type="text" className="ml-4 mt-2"></input>
        <h2 className="ml-4">Hello,React!</h2>
        <div id="gap"></div>
        <footer>
          <h2 id="h2">Learn about this React VS.NET template</h2>
          <h5>Copyright &copy; 2020</h5>
        </footer>
      </div>
    );
  }
}
