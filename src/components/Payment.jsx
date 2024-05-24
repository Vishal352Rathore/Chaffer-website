import React, { useState, useEffect } from "react";
import "../CssStyle/Payment.css";
import card from "../cab_images/cards.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updatePaymentData } from "../Actions/actions.js";
import { toast } from "react-toastify";

import axios from "axios";

const PaymentCard = ({ handleNextButon, handlePreviousButton }) => {
  const userDetails = useSelector((state) => state.userDetailReducer);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const headers = {
    // 'Content-Type': 'application/json', // Assuming JSON data
    token: token, // Include your token here
  };
  const navigate = useNavigate();

  const URL = "https://chauffer-staging-tse4a.ondigitalocean.app/v1/ride/bookRide";

  const [rideBookingData, setRideBookingData] = useState({
    pickUpLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    userId: "",
    vehicleId: "",
    bookingFor: "",
    flightNumber: "",
    notesForChauffer: "",
    referenceNumberOrCostCenter: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
    status: 0,
    cardName: " ",
    cardNumber: null,
    expiryDate: "",
    cvv: null,
    amount: null,
  });

  const paymentDetailFromRedux = useSelector(
    (state) => state.paymentDetailReducer
  );

  const [paymentDetails, setPaymentDetails] = useState({
    nameofcard: "",
    cardnumber: "",
    expirationdate: "",
    cvv: "",
  });

  useEffect(() => {
    setPaymentDetails(paymentDetailFromRedux);
  }, [paymentDetailFromRedux]);

  const isUserLogin = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token) {
        console.log("user is logined", paymentDetails);
        dispatch(updatePaymentData(paymentDetails));
        datafetchingForBookRide();
        
        // toast.success("Payment has done Successfully ! ")
      } else {
        dispatch(updatePaymentData(paymentDetails));
        navigate("/login", { state: { from: "/services/bookride" } });
        console.log("user is not login");
      }
    } catch (error) {
      console.log("Error in login Data :", error);
    }
  };

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const datafetchingForBookRide = () => {
    const [datePart, timePart] = localStorage.getItem("dateTime").split("T");
    const vehicleId = JSON.parse(localStorage.getItem("selected vehicle"))._id;
    console.log("vehicleId", vehicleId);

    setRideBookingData({
      pickUpLocation: localStorage.getItem("pickUpLocationCoordinates"),
      dropLocation: localStorage.getItem("dropLocationCoordinates"),
      date: datePart,
      time: timePart,
      userId: localStorage.getItem("user_id"),
      vehicleId: vehicleId,
      bookingFor: userDetails.bookingFor || "Myself",
      flightNumber: userDetails.flight_no,
      notesForChauffer: userDetails.chauffer_notes,
      referenceNumberOrCostCenter: userDetails.cost_center,
      firstName: userDetails.firstName || localStorage.getItem("firstName"),
      lastName: userDetails.lastName || localStorage.getItem("lastName"),
      email: userDetails.email || localStorage.getItem("email"),
      phoneNumber: userDetails.mobileNumber || localStorage.getItem("mobileNumber"),
      status: 0, // Initial status
      cardName: paymentDetails.nameofcard,
      cardNumber: paymentDetails.cardnumber,
      expiryDate: paymentDetails.expirationdate, // Card expiry date
      cvv: paymentDetails.cvv,
      amount: "535",
    });

    // bookingDone();
  };

  useEffect(() => {
    console.log("final booking data", rideBookingData);

    bookingDone();
  }, [rideBookingData]);

  const bookingDone = async () => {
    try {
      await axios
        .post(URL, rideBookingData, {
          method: "POST",
          headers: {
            token: token,
            "Content-Type": "application/json", // Adjust content type as needed
          },
        })
        .then((res) => {
          console.log("Booking DOne", res);
          if (res.data.status === true) {
            console.log("Book ride done Data:",res.data)
            handleNextButon();
          }
        })
        .catch(() => console.log("Booking fail"));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="payment-container ">
      <section className="container">
        {/* Add credit card form */}

        <section className="row mb-5 pb-5">
          <div
            className="col-md-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <p className="add-credit-card-form-title">Add credit card</p>
            <form className="add-credit-card-form">
              <div className="mb-3 mt-3">
                <label htmlFor="nameofcard" className="form-label">
                  Name of card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameofcard"
                  name="nameofcard"
                  value={paymentDetails.nameofcard}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="cardnumber" className="form-label">
                  Card Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="cardnumber"
                  name="cardnumber"
                  value={paymentDetails.cardnumber}
                  onChange={handleChange}
                />
                <span>
                  <img src={card} alt="not found" />
                </span>

                {/* <img src=" " alt="not found" /> */}

                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="expdate" className="form-label">
                      Expiration date *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expirationdate"
                      name="expirationdate"
                      value={paymentDetails.expirationdate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <label htmlFor="cvv" className="form-label">
                      CVV *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="savecardtolist">
                      <i className="fa-solid fa-square-check"></i> Save card to
                      your list
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 ">
                    <ul
                      className="instruction"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <li>
                        Our servers are encrypted with TLS/SSL to ensure
                        security and privacy.
                      </li>
                      <li>
                        The amount will be held from your selected payment
                        method after the booking. We only charge you after the
                        ride is
                        <br></br>
                        finished.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="row d-flex justify-content-between ">
            <div className="col-md-3 col-sm-6">
              <button
                className="pay-skip-pickup-btn"
                onClick={handlePreviousButton}
              >
                Skip pickup info
              </button>
            </div>
            <div className="col-md-3 col-sm-6">
              <button
                className="pay-continue-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Continue
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">Please confirm Your Payment !!</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn sign-in-btn"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class=" continue-btn"
                        onClick={isUserLogin}
                        data-bs-dismiss="modal"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default PaymentCard;
