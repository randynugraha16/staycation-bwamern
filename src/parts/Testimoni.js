import React from "react";
import Button from "../components/Button/Button";
import Star from "../components/Star/Star";
import Fade from "react-reveal/Fade";

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-lg-5 col-12 mb-lg-0 mb-5">
            <img
              src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
              alt={data.name}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 col-12 text-lg-start text-center mt-0 mt-lg-4">
            <h4 className="text-darkblue mb-lg-5 mb-4">{data.name}</h4>
            <Star
              value={data.rate}
              height={35}
              width={35}
              spacing={4}
              className="mb-3"
            />
            <h2 className="mb-2 fw-normal text-darkblue">{data.content}</h2>
            <p className="text-gray-500 mb-5 fw-light">
              {data.familyName}, {data.familyOccupation}
            </p>
            <Button
              href="/agents"
              isPrimary
              className="btn px-5 mb-5"
              hasShadow
              isLarge
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </Fade>
    </section>
  );
}
