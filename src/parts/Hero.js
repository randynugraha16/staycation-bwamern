import React from "react";

import ImageHero from "../assets/images/hero.png";
import IconCities from "../assets/icons/ic_cities.svg";
import IconTreasure from "../assets/icons/ic_treasure.svg";
import IconTraveler from "../assets/icons/ic_traveler.svg";
import Button from "../components/Button/Button";
import Fade from "react-reveal/Fade";

import numberFormat from "../utils/numberFormat";

export default function Hero(props) {
  function showMostList() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade top delay={200}>
      <section className="container">
        <div className="row align-center d-flex">
          <div className="order-lg-1 order-2 col-md-12 col-lg-6 text-lg-start text-center">
            <h1 className="mb-3 tag__line">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <div className="mb-3 w-75 tag__copywriting">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </div>
            <Button
              href="/agents"
              isPrimary
              className="btn px-5 mb-5"
              hasShadow
              onClick={showMostList}
              isLarge
            >
              Show Me Now
            </Button>
            <div className="row">
              <div className="col-4">
                <img src={IconTraveler} alt="travel" />
                <h6 className="mt-2">
                  <span className="text-darkblue">
                    {numberFormat(props.data.travelers)}{" "}
                  </span>

                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-4">
                <img src={IconCities} alt="travel" />
                <h6 className="mt-2">
                  <span className="text-darkblue">
                    {numberFormat(props.data.cities)}{" "}
                  </span>

                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
              <div className="col-4">
                <img src={IconTreasure} alt="travel" />
                <h6 className="mt-2">
                  <span className="text-darkblue">
                    {numberFormat(props.data.treasure)}{" "}
                  </span>
                  <span className="text-gray-500 font-weight-light">
                    Treasure
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="order-lg-2 order-1 col-md-12 col-lg-6 text-md-start text-center mb-lg-0 mb-5">
            <div>
              <img src={ImageHero} alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
