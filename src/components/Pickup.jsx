import React, { useState ,useEffect} from "react";
import "../CssStyle/Pickup.css";
import { useSelector, useDispatch } from "react-redux";
import { updateBookingData } from "../Actions/actions.js";


const Pickup = ({handleNextButon ,handlePreviousButton}) => {
  const [selectedRadio, setSelectedRadio] = useState("Myself");
  const userDetailFromRedux = useSelector((state) => state.userDetailReducer);
  const dispatch = useDispatch();

  const [bookingDetails, setBookingDetails] = useState({
    bookingFor: "Myself",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    flight_no :"",
    chauffer_notes :"",
    cost_center:""
  });

  useEffect(() => {
    setBookingDetails(userDetailFromRedux);
  }, [userDetailFromRedux]);

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () =>{
    handleNextButon();
    dispatch(updateBookingData(bookingDetails));
    localStorage.setItem("booking details" , JSON.stringify(bookingDetails));
  }

  const handleRadioBUttonChange = (e) => {
    setSelectedRadio(e.target.value);
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="pickup-container ">
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
                  />
                  <label class="form-check-label" htmlFor="radio2">
                    Book for someone else
                  </label>
                </div>
              </div>
            </div>
            { selectedRadio === "Someone Else" ?
              <div className="row">
                <div className="someone-else m-auto ">
                  <form className="p-3 mt-3 ">
                    <div className="row">
                      <div className="col mt-2">
                        <label htmlFor="firstname" className="form-label">
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
                      <div className="col mt-2">
                        <label htmlFor="lastname" className="form-label">
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
                      <div className="col mt-4">
                        <label htmlFor="email" className="form-label">
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
                      <div className="col mt-4">
                        <label htmlFor="number" className="form-label">
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
                          maxLength="10"
                          minLength="10"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>:
              <></>
            }
            <div className="provide-additional-form-container p-3">
              <p className="booking-form">Provide additional information</p>
              <p className="flight-number">
                Enter the flight number to ensure the chauffeur brings the guest
                to the correct terminal.
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
                />
                <p>e.g. LH 202, U24567, BA2490</p>
              </div>
              <div className="chauffer-notes-field">
                <label htmlFor="chauffer-notes" class="form-label">
                  Notes for the chauffeur
                </label>
                <textarea class="form-control" id="chauffer_notes"
                  name="chauffer_notes" rows="5y"  value={bookingDetails.chauffer_notes}
                  onChange={handleChange}></textarea>
                
                <p>
                  Add special requests, e.g. number of bags, child seats, etc.
                  Please do not include confidential information.
                </p>
              </div>
              <div className="cost-center-field">
                <label htmlFor="cost-center" class="form-label">
                  Reference number or cost center
                </label>
                <textarea class="form-control" id="cost_center"
                  rows="5y"  name="cost_center"
                  value={bookingDetails.cost_center}
                  onChange={handleChange}></textarea>
                
                <p>
                  Booking for business? What you enter above will appear on the
                  invoice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="row d-flex justify-content-between font-inter mt-5 mb-5 pb-5">
          <div className="col-md-3">
            <button
              className="skip-pickup-btn"
              onClick={handlePreviousButton}
            >
              Skip pickup info
            </button>
          </div>
          <div className="col-md-3 ">
            <button
              className="continue-btn"
              onClick={ handleSubmit}
            >
              Continue
            </button>
          </div>
        </section>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Pickup;
