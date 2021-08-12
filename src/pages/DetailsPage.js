import React, { Component } from "react";
import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import ItemDetails from "../json/itemDetails.json";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailSection from "../parts/PageDetailSection";
import Testimoni from "../parts/Testimoni";
import Footer from "../parts/Footer";
import Activities from "../parts/Activities";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Home Details", pageHref: "#" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <PageDetailSection data={ItemDetails} />
        <Activities data={ItemDetails.activities} />
        <Testimoni data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
