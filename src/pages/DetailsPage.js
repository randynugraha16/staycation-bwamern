import React, { Component } from "react";
import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailSection from "../parts/PageDetailSection";
import Testimoni from "../parts/Testimoni";
import Footer from "../parts/Footer";
import Activities from "../parts/Activities";

import { checkoutBooking } from "../store/actions/checkout";
import { connect } from "react-redux";
import { fetchPage } from "../store/actions/page";
import { Spinner } from "react-bootstrap";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/item/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }
  render() {
    const { page, match } = this.props;
    // console.log(page[match.params.id]);
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "Home Details", pageHref: "#" },
    ];
    if (!page[match.params.id]) {
      return (
        <div className="container h-100">
          <div className="row">
            <div
              className="col-12 text-center d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
      );
    }
    if (!page[match.params.id]) return null;
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeaturedImage data={page[match.params.id].imageId} />
        <PageDetailSection
          data={page[match.params.id]}
          startBooking={this.props.checkoutBooking}
        />
        <Activities data={page[match.params.id].activityId} />
        <Testimoni data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
