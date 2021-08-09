import Header from "../parts/Header";
import React, { Component } from "react";
import data from "../json/landingPage.json";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
export default class landingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={data.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={data.mostPicked} />
      </>
    );
  }
}
