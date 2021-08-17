import React from "react";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";

export default function PageDetailDesc({ data }) {
  return (
    <main>
      <Fade bottom delay={500}>
        <h4 className="pb-2">About the place</h4>
      </Fade>
      <Fade bottom delay={500}>
        <div className="description">{ReactHtmlParser(data.description)}</div>
      </Fade>
      <div className="row mt-3">
        {data.featureId.map((item, index) => {
          return (
            <Fade bottom delay={300 * index} key={`feature-${index}`}>
              <div className="col-lg-3 col-6 p-2 text-center text-lg-start mb-2">
                <img
                  src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                  alt={item.name}
                  className="d-block mx-auto mx-lg-0 mb-2"
                  width="50"
                />{" "}
                <span>{item.qty}</span>{" "}
                <span className="text-gray-500 fw-light">{item.name}</span>
              </div>
            </Fade>
          );
        })}
      </div>
    </main>
  );
}
