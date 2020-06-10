import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import Main from "./Main";
import Footer from "./Footer";
//import { Details, New } from "./Array";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}
