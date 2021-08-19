import React from "react";
import Fade from "react-reveal/Fade";
import InputText from "../../components/Form/InputText/InputText";

export default function BookingInfo(props) {
  const { data, itemDetails, checkout } = props;
  return (
    <Fade bottom>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-12 border-end mb-3 p-4 p-lg-5">
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${itemDetails.imageId[0].imageUrl}`}
                    alt={itemDetails.name}
                    className="img-cover"
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper text-darkblue">
                      <h5>{itemDetails.title}</h5>
                      <span className="text-gray-500">
                        {itemDetails.city}, {itemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span className="text-darkblue">
                      ${checkout.duration * itemDetails.price} USD
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {itemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-lg-5 col-12 p-4 p-lg-5">
            <Fade delay={600}>
              <label className="text-darkblue" htmlFor="firstName">
                First Name
              </label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstname}
                onChange={props.onChange}
                inputClassName="mt-3"
              />
              <label className="text-darkblue" htmlFor="lastName">
                Last Name
              </label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
                inputClassName="mt-3"
              />
              <label className="text-darkblue" htmlFor="email">
                Email Address
              </label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
                inputClassName="mt-3"
              />
              <label className="text-darkblue" htmlFor="phone">
                Phone Number
              </label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
                inputClassName="mt-3"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
