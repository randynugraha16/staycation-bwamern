import React from "react";
import Button from "../components/Button/Button";
import Fade from "react-reveal/Fade";

export default function Activities({ data }) {
  return (
    <section className="container">
      <Fade top delay={300}>
        <h4 className="mb-3 font-weight-medium">Treasure to Choose</h4>
      </Fade>
      <div className="container-grid">
        {data.map((item, index2) => {
          return (
            <div className="item column-3 row-1" key={`treasure-${index2}`}>
              <Fade top delay={400 * index2}>
                <div className="card">
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      className="stretched-link text-decoration-none d-block text-gray-800"
                      href={`/properties/${item._id}`}
                      type="link"
                    >
                      <h5 className="fw-bold text-darkblue">{item.name}</h5>
                    </Button>
                    <span className="text-gray-500">{item.type}</span>
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
