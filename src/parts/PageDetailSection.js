import React from "react";
import BookingForm from "./BookingForm";
import PageDetailDesc from "./PageDetailDesc";

export default function PageDetailSection({ data }) {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-7 col-12">
          <PageDetailDesc data={data} />
        </div>
        <div className="col-lg-5 col-12 my-5 mt-lg-0">
          <BookingForm itemDetails={data} />
        </div>
      </div>
    </section>
  );
}
