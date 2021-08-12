import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Fade from "react-reveal/Fade";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items center">
          <div className="col-12 col-lg-3 align-self-center">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-12 col-lg-6 text-center">
            <h1 className="h2 text-darkblue">{data.name}</h1>
            <span className="text-gray-500">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
