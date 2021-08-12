import React from "react";
import Button from "../components/Button/Button";
import Fade from "react-reveal/Fade";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade top delay={300}>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        </Fade>
        <div className="container-grid">
          {category.length === 0 ? (
            <div className="row">
              <div className="col-12 align-items-center">
                There is no property for this category
              </div>
            </div>
          ) : (
            category.items.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <Fade top delay={400 * index2}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag fw-bold">
                          Popular <span className="fw-lighter">Choice</span>
                        </div>
                      )}
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
                        <span className="text-gray-500">
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
