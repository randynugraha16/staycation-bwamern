import React from "react";
import Button from "../components/Button/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4 sm ${index === 0 ? "row-2" : "row-1"}`}
            >
              <div className="card card-feature">
                <div className="tag">
                  ${item.price} <span>per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="streched-link d-block text-white"
                    href={`/propperties/${item._id}`}
                    type="link"
                  >
                    <h5>{item.button}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
