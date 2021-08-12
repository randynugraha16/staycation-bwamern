import React, { Component } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

export default class Example extends Component {
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "/" },
    ];
    return (
      <div className="container">
        <div
          className="row d-flex text-center  justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
