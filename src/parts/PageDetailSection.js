import React from "react";
import BookingForm from "./BookingForm";
import PageDetailDesc from "./PageDetailDesc";

export default function PageDetailSection(props) {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-7 col-12">
          <PageDetailDesc data={props.data} />
        </div>
        <div className="col-lg-5 col-12 my-5 mt-lg-0">
          <BookingForm
            itemDetails={props.data}
            startBooking={props.startBooking}
          />
        </div>
      </div>
    </section>
  );
}
