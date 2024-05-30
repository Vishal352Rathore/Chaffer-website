import React, { useState, useEffect } from "react";
import "../CssStyle/Pickup.css";
import { useSelector, useDispatch } from "react-redux";
import { updateBookingData1 ,updateBookingData2} from "../Actions/actions.js";


const Pickup = ({handleNextButon ,handlePreviousButton ,from}) => {
  const [selectedRadio, setSelectedRadio] = useState("Myself");

  const userDetailForContinueBooking =  useSelector((state) => state.userDetailReducer.userDetail1);
  const userDetailForNewBooking =  useSelector((state) => state.userDetailReducer.userDetail2);
  const userDetailFromRedux =  from ===  "Continue Booking" ?  userDetailForContinueBooking : userDetailForNewBooking ;

  const dispatch = useDispatch();

  const [bookingDetails, setBookingDetails] = useState({
    bookingFor: "Myself",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    flight_no: "",
    chauffer_notes: "",
    cost_center: "",
  });

  useEffect(() => {
    setBookingDetails(userDetailFromRedux);
  }, [userDetailFromRedux]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    if (name === "mobileNumber") {
      let formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length >10) {
        // +91 626 6344 405
        formattedValue = "+" + formattedValue.slice(0, 2) + " " + formattedValue.slice(2, 5) + " " + formattedValue.slice(5, 9) + " " + formattedValue.slice(9, 13);

          
      } else if (formattedValue.length > 16) {
        console.log("Invalid phone number format");
        
      }
      setBookingDetails({ ...bookingDetails, [name]: formattedValue }); 
    } 
    
    else {
      setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    handleNextButon();
    
    from ===  "Continue Booking" ? dispatch(updateBookingData1(bookingDetails)): dispatch(updateBookingData2(bookingDetails))
    localStorage.setItem("booking details" , JSON.stringify(bookingDetails));
  }

  const handleRadioBUttonChange = (e) => {
    setSelectedRadio(e.target.value);
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="pickup-container ">
      <form onSubmit={handleSubmit}>
        <section className="container">
          <section className="row font-inter">
            <div className="col-md-12">
              <div className="booking-form-container font-inter">
                <p className="booking-form">Select who you are booking for</p>
                <div className="radio-btn-container">
                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio1"
                      name="bookingFor"
                      value="Myself"
                      onChange={handleRadioBUttonChange}
                      checked={selectedRadio === "Myself"}
                      required
                    />
                    <label class="form-check-label" htmlFor="radio1">
                      Book for myself
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="radio2"
                      name="bookingFor"
                      value="Someone Else"
                      onChange={handleRadioBUttonChange}
                      checked={selectedRadio === "Someone Else"}
                      required
                    />
                    <label class="form-check-label" htmlFor="radio2">
                      Book for someone else
                    </label>
                  </div>
                </div>
              </div>

              {selectedRadio === "Someone Else" ? (
                <div className="row">
                  <div className="someone-else m-auto ">
                    <form className="container ">
                      <div className="row">
                        <div className="col-md-6 ">
                          <label
                            htmlFor="firstname"
                            className="form-label label-padding"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="firstname"
                            placeholder=""
                            name="firstName"
                            value={bookingDetails.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6 ">
                          <label
                            htmlFor="lastname"
                            className="form-label label-padding"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            placeholder=""
                            name="lastName"
                            value={bookingDetails.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label
                            htmlFor="email"
                            className="form-label label-padding"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder=""
                            name="email"
                            value={bookingDetails.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="number"
                            className="form-label label-padding"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="number"
                            placeholder=""
                            name="mobileNumber"
                            value={bookingDetails.mobileNumber}
                            onChange={handleChange}
                            required
                            maxLength="16"
                            minLength="15"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="provide-additional-form-container p-3">
                <p className="booking-form">Provide additional information</p>
                <p className="flight-number">
                  Enter the flight number to ensure the chauffer brings the
                  guest to the correct terminal.
                </p>
                <div className="flight-field">
                  <label htmlFor="flightno" class="form-label">
                    Flight number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="flight_no"
                    name="flight_no"
                    value={bookingDetails.flight_no}
                    onChange={handleChange}
                    required
                  />
                  <p>e.g. LH 202, U24567, BA2490</p>
                </div>
                <div className="chauffer-notes-field">
                  <label htmlFor="chauffer-notes" class="form-label">
                    Notes for the chauffer
                  </label>
                  <textarea
                    class="form-control"
                    id="chauffer_notes"
                    name="chauffer_notes"
                    rows="5y"
                    value={bookingDetails.chauffer_notes}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <p>
                    Add special requests, e.g. number of bags, child seats, etc.
                    Please do not include confidential information.
                  </p>
                </div>
                <div className="cost-center-field">
                  <label htmlFor="cost-center" class="form-label">
                    Reference number or cost center
                  </label>
                  <textarea
                    class="form-control"
                    id="cost_center"
                    rows="5y"
                    name="cost_center"
                    value={bookingDetails.cost_center}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <p>
                    Booking for business? What you enter above will appear on
                    the invoice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="row  font-inter mt-5 mb-5 pb-5">
            <div className="col-md-6">
              <button
                className="skip-pickup-btn"
                onClick={handlePreviousButton}
              >
                Skip pickup info
              </button>
            </div>
            <div className="col-md-6 ">
              <div className="continue-btn-container">
                <button className="continue-btn" type="submit">
                  Continue
                </button>
              </div>
            </div>
          </section>
        </section>
      </form>
    </div>
  );
};

export default Pickup;
