import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar text-white bg-primary">
          <div className="d-none d-lg-block d-md-block">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="nav-link text-white" href="www.google.com">
                  HOME
                </a>
              </li>
              <li className="list-inline-item">
                <a className="nav-link text-white" href="www.google.com">
                  DELIEVERY
                </a>
              </li>
              <li className="list-inline-item">
                <a className="nav-link text-white" href="www.google.com">
                  PAYMENT
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar">
            <h5 className="float-right">Call +9988345631</h5>
            <div className="dropdown dropright text-white">
              <button
                className="btn text-white dropdown-toggle ml-2 mb-2 btn-lg"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                English
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="w">
                  Arabic
                </a>
                <a className="dropdown-item" href="wgfeu">
                  Russia
                </a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

/* 
.dropdown = indicates dropdown menu
.dropdown-toggle = use to make  this button toggle  , data-toggle="dropdown" 
   
.dropdown-menu = actually build the drop down
.dropdown-divider = create line partition between the dropdown-item <div className="dropdown-divider"><div>     
.dopdown-header = used to create header inside the dropdown-menu <h>
  
  */
