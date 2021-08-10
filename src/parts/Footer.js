import Button from "../components/Button/Button";
import React from "react";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer className="pb-5">
      <hr className="dropdown-divider" style={{ background: "#E5E5E5" }}></hr>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-3 text-center text-lg-start mb-3">
            <IconText />
            <p className="text-gray-500 mt-2">
              We kaboom your beauty holiday <br /> instantly and memorable.
            </p>
          </div>
          <div className="col-lg-3 col-6 col-md-4 mb-3">
            <div className="text-darkblue fw-bold mb-3">For Beginners</div>
            <ul className="list-unstyled text-gray-500">
              <li>
                <Button
                  href="/register"
                  type="link"
                  className="text-decoration-none fw-light text-gray-500"
                >
                  New Account
                </Button>
              </li>
              <li>
                <Button
                  href="/propperties"
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  Start Booking a Room
                </Button>
              </li>
              <li>
                <Button
                  href="/use-payments"
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 col-md-4">
            <div className="text-darkblue fw-bold mb-3">Explore Us</div>
            <ul className="list-unstyled text-gray-500">
              <li>
                <Button
                  href="/careers"
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  Our Careers
                </Button>
              </li>
              <li>
                <Button
                  href="/privacy"
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  Privacy
                </Button>
              </li>
              <li>
                <Button
                  href="/terms"
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 col-md-4">
            <div className="text-darkblue fw-bold mb-3">Connect Us</div>
            <ul className="list-unstyled text-gray-500">
              <li>
                <Button
                  href={"mailto:support@staycation.id"}
                  isExternal
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  support@staycation.id
                </Button>
              </li>
              <li>
                <Button
                  href="tel:02122081996"
                  isExternal
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  021 - 2208 - 1996
                </Button>
              </li>
              <li>
                <Button
                  href="http://maps.google.com/?q=Staycation"
                  isExternal
                  target="_blank"
                  type="link"
                  className="text-decoration-none text-gray-500"
                >
                  Staycation, Kemang, Jakarta
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center py-5 text-gray-500">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
