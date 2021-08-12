import React from "react";
import ReactHtmlParser from "react-html-parser";
import Fade from "react-reveal/Fade";

export default function PageDetailDesc({ data }) {
  console.log(data);
  return (
    <main>
      <Fade bottom>
        <h4 className="pb-2">About the place</h4>
      </Fade>
      <Fade bottom>
        <div className="description">{ReactHtmlParser(data.description)}</div>
      </Fade>
      <div className="row mt-3">
        {data.features.map((item, index) => {
          return (
            <Fade bottom delay={300 * index}>
              <div
                className="col-lg-3 col-6 p-2 text-center text-lg-start mb-2"
                key={`feature-${index}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="d-block mx-auto mx-lg-0 mb-2"
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
