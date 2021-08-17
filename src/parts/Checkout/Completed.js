import React from "react";
import Fade from "react-reveal/Fade";
import LogoCompleted from "../../assets/icons/logoCompleted.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container">
        <div className="row justify-content-center align-items center">
          <div className="col-4">
            <img
              src={LogoCompleted}
              className="img-fluid"
              alt="Complete Logo"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
