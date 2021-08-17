import React from "react";
import Button from "../components/Button/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade top>
        <h4 className="mb-3">Most Picked</h4>
      </Fade>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4 sm ${index === 0 ? "row-2" : "row-1"}`}
            >
              <Fade top delay={300 * index}>
                <div className="card card-feature">
                  <div className="tag">
                    ${item.price} <span>per {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={
                        item.imageId[0]
                          ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                          : ""
                      }
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      className="stretched-link text-decoration-none d-block text-white"
                      href={`/properties/${item._id}`}
                      type="link"
                    >
                      <h5>{item.title}</h5>
                    </Button>
                    <span>
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
