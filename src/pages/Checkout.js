import React, { Component } from "react";
import Header from "../parts/Header";
import Fade from "react-reveal/Fade";
import Button from "../components/Button/Button";
import Stepper from "../components/Stepper/Stepper";
import Controller from "../components/Stepper/Controller/Controller";
import MainContent from "../components/Stepper/MainContent/MainContent";
import Numbering from "../components/Stepper/Numbering/Numbering";
import Meta from "../components/Stepper/Meta/Meta";
import BookingInfo from "../parts/Checkout/BookingInfo";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";
import ItemDetails from "../json/itemDetails.json";

import { connect } from "react-redux";
import { submitBooking } from "../store/actions/checkout";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  _Submit = (nextStep, prevStep) => {
    const { data } = this.state;
    const { checkout, page } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("emailAddress", data.email);
    payload.append("phoneNumber", data.phone);
<<<<<<< HEAD
    payload.append("bankFrom", data.bankName);
=======
    payload.append("bankFroms", data.bankName);
>>>>>>> 03a5d39be94860b658b1ebcab6eb9ab567e390ec
    payload.append("accountHolder", data.bankHolder);
    payload.append("imageUrl", data.proofPayment[0]);
    payload.append("itemId", checkout._id);
    payload.append("price", page[checkout._id].price * checkout.duration);
    payload.append("duration", checkout.duration);
    payload.append("bookingDateStart", checkout.date.startDate);
    payload.append("bookingDateEnd", checkout.date.endDate);

    this.props
      .submitBooking(payload)
      .then(() => {
        nextStep();
      })
      .catch((err) => {
        prevStep();
      });
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout)
      return (
        <>
          <Header isCentered />
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h4>Pilih Kamar</h4>
              </div>
              <div className="col-12 text-center">
                <Button className="btn" type="link" isBlock isPrimary href="/">
                  Back To Home
                </Button>
              </div>
            </div>
          </div>
        </>
      );

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInfo
            data={data}
            checkout={checkout}
            itemDetails={page[this.props.checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly Follow the instruction below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={page[this.props.checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering data={steps} current={CurrentStep} />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.phone !== "" &&
                    data.email !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankHolder !== "" &&
                    data.bankName !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep, prevStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button className="btn" type="link" onClick={prevStep}>
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    href="/"
                  >
                    Back To Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  checkout: state.checkout,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);
