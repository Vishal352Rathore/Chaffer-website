import React, { useState } from "react";
// import {useNavigate } from "react-router-dom";
import "../CssStyle/Help.css";
import Header from "./Header";

const Help = () => {
  // const [question, setQuestion] = useState(false);
  // const navigate = useNavigate();

  return (
    <div className="help-container ">
      <section className="bg-image-aboutus w-100%">
        <Header />
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5">Help</p>
            </div>
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="story-help">Help </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="help-subtitle">Welcome to GenAlpha Plus</p>
            <p className="help-subtitle-para">
              We're here to ensure you have a smooth and luxurious travel
              experience. If you have any questions or need assistance, please
              refer to the information below or contact our customer support
              team.
            </p>
          </div>
        </div>
      </section>
      <section className="container ">
        <div className="row">
          <div className="col-md-12">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    How do I book a ride?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <ul>
                      <li> Visit our homepage.</li>
                      <li>Enter your pickup and drop-off locations.</li>
                      <li>Select your preferred vehicle type.</li>
                      <li>Choose the date and time of your ride.</li>
                      <li>
                        Click on "Book Now" and fill in your contact details.
                      </li>
                      <li>Confirm your booking.</li>
                    </ul>
                    {/* <div>
                    <p>Can I book a ride for someone else?</p>
                    <p>
                      Yes, you can book a ride for someone else. Simply provide
                      their name and contact information during the booking
                      process.
                    </p>
                    <p>How far in advance should I book my ride?</p>
                    <p>
                      We recommend booking at least 24 hours in advance to
                      ensure availability, especially during peak times.
                    </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwelve">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwelve"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwelve"
                  >
                    Can I book a ride for someone else?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwelve"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingTwelve"
                >
                  <div class="accordion-body">
                    <p>Yes, you can book a ride for someone else. Simply provide their name and contact information during the booking process.</p>
                    
                  </div>
                </div>
              </div>
            
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThirteen">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThirteen"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThirteen"
                  >
                    How far in advance should I book my ride?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThirteen"
                  class="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingThirteen"
                >
                  <div class="accordion-body">
                    <p>We recommend booking at least 24 hours in advance to ensure availability, especially during peak times.</p>
                    
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    How do I view my booking details?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <p>
                      You can view your booking details by logging into your
                      account and navigating to the "My Bookings" section.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    How is the fare calculated?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <p>
                      Our fares are calculated based on the distance, duration,
                      and vehicle type. Additional charges may apply for extra
                      services or waiting time.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingfour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    What payment methods are accepted?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <p>
                      We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely through our website.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseNine"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseNine"
                  >
                     When will I be charged for my ride?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingNine"
                >
                  <div class="accordion-body">
                    <p>
                    You will be charged once your booking is confirmed. A receipt will be sent to your email address.
                    </p>
                  </div>
                </div>
              </div>
           
                  
               
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSix"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSix"
                  >
                    What types of vehicles are available?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSix"
                >
                  <div class="accordion-body">
                    <p>We offer a range of luxury vehicles including sedans, SUVs, and limousines. Each vehicle is equipped with premium amenities for your comfort.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseSeven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseSeven"
                  >
                    Who are your chauffeurs?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingSeven"
                >
                  <div class="accordion-body">
                    <p>Our chauffeurs are professionally trained, licensed, and background-checked. They are committed to providing you with a safe and comfortable ride.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEight"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEight"
                  >
                    Can I request a specific chauffeur?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEight"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingEight"
                >
                  <div class="accordion-body">
                    <p>
                    While we cannot guarantee a specific chauffeur, you can make a request during the booking process, and we will do our best to accommodate your preference.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTen"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTen"
                  >
                    What measures are in place for passenger safety?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTen"
                >
                  <div class="accordion-body">
                    <p>
                    We prioritize your safety with regularly maintained vehicles, professional chauffeurs, and adherence to all traffic laws and regulations. We also follow strict hygiene protocols to ensure a clean and safe environment.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseEleven"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseEleven"
                  >
                    Are child seats available?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseEleven"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingEleven"
                >
                  <div class="accordion-body">
                    <p>
                    Yes, child seats are available upon request. Please indicate your requirement during the booking process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-container">
              <p>If you need further assistance or have any questions, please don't hesitate to contact our customer support team.</p>
              <ul>
                <li><span>Phone:</span> Customer Support Phone Number</li>
                <li><span>Email:</span>Customer Support Email</li>
                <li><span>Live Chat:</span>Available on our website from 9 AM to 6 PM</li>
              </ul>
              <p className="thankyou-title">Thank you for choosing GenAlpha Plus . We look forward to serving you!</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer/> */}
    </div>
  );
};

export default Help;
