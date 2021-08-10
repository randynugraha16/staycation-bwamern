import Header from "../parts/Header";
import React, { Component } from "react";
import data from "../json/landingPage.json";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimoni from "../parts/Testimoni";
import Footer from "../parts/Footer";
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
        <Categories data={data.categories} />
        <Testimoni data={data.testimonial} />
        <Footer />
      </>
    );
  }
}
