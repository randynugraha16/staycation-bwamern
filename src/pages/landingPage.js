import Header from "../parts/Header";
import React, { Component } from "react";

export default class landingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
