import React from "react";
import { useNavigate } from "react-router-dom";
import "../CssStyle/CitiesAndClasses.css";
import Header from "./Header";

const CitiesAndClasses = () => {
  const navigate = useNavigate();

  return (
    <div className="city-conatainer mb-5 pb-5">
      <section className="bg-image-aboutus w-100%">
        {/* <Header/> */}
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5">City</p>
            </div>
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="story-cities">Our Service Cities</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="cities-subtitle">
              Experience Luxury Chauffeur Services Across Nigeria
            </p>
            <p className="cities-subtitle-para">
              We are proud to offer our premium chauffeur services in the
              following cities. Whether you're traveling for business or
              leisure, our professional drivers and luxurious vehicles ensure a
              comfortable and safe journey.
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
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Lagos
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse "
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <p>
                      Lagos, the bustling economic hub of Nigeria, is a city
                      that never sleeps. Our chauffeur services in Lagos cater
                      to all your transportation needs, from airport transfers
                      to corporate events and city tours.
                    </p>{" "}
                    <ul>
                      <li>
                        <span>Airport Transfers: </span>Seamless pick-up and
                        drop-off at Murtala Muhammed International Airport.
                      </li>
                      <li>
                        <span>Business Travel: </span> Reliable and punctual
                        service for your corporate engagements.
                      </li>
                      <li>
                        <span>City Tours: </span>Explore the vibrant life and
                        landmarks of Lagos in comfort.
                      </li>
                    </ul>
                    <span onClick={() => navigate()}></span>
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
                    Ibadan
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <p>
                      As one of the largest cities in Africa, Ibadan is rich in
                      history and culture. Our chauffeurs will guide you through
                      its historic sites and modern attractions.
                    </p>
                    <ul>
                      <li>
                        <span>Cultural Tours:</span>Visit the University of
                        Ibadan, Cocoa House, and other landmarks.
                      </li>
                      <li>
                        <span>Event Transportation:</span> Perfect for weddings,
                        conferences, and social gatherings.
                      </li>
                      <li>
                        <span>Personalized Service:</span> Tailored rides to
                        suit your individual needs.
                      </li>
                    </ul>
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
                    Abuja
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <p>
                      The capital city, Abuja, is known for its beautiful
                      architecture and serene environment. Our services ensure
                      you experience the city in luxury and style.
                    </p>
                    <ul>
                      <li>
                        <span>Government and Diplomatic Services: </span>{" "}
                        Discreet and secure transportation for official
                        engagements.
                      </li>
                      <li>
                        <span>City Tours:</span> Discreet and secure
                        transportation for official engagements.
                      </li>
                      <li>
                        <span>Executive Travel:</span> High-end vehicles for
                        your executive needs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    Owerri
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                    <p>
                      Owerri, the heart of Imo State, is a city known for its
                      hospitality and vibrant nightlife. Let us handle your
                      transportation while you enjoy the city.
                    </p>
                    <p>
                      <span>Nightlife Tours:</span>Experience Owerri’s lively
                      bars and clubs.
                    </p>
                    <p>
                      <span>Cultural Sites:</span>Visit the Mbari Cultural
                      Center and other attractions.
                    </p>
                    <p>
                      <span>Convenience:</span>Reliable transportation for all
                      your local travels.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    Port Harcourt
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div class="accordion-body">
                    <p>
                      Port Harcourt, the Garden City, is the center of Nigeria's
                      oil industry. Our chauffeur services offer comfort and
                      reliability in this vital city.
                    </p>
                    <ul>
                      <li>
                        <span>Corporate Services: </span>Ideal for oil and gas industry professionals.
                      </li>
                      <li><span>Tourist Attractions: </span>Explore the Port Harcourt Tourist Beach, cultural centers, and more.</li>
                      <li><span>Special Events: </span>Ensure timely and stylish arrivals to any event.</li>
                    </ul>
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
            <p className="cities-subtitle title-choose-us">Why Choose Us?</p>
            <ul className="cities-subtitle-para">
              <li><span>Professional Chauffeurs: </span>Our drivers are experienced, knowledgeable, and courteous.</li>
              <li><span>Luxury Fleet: </span>Choose from our range of high-end vehicles to suit your style and needs.</li>
              <li><span>Punctuality:</span> We value your time and guarantee timely arrivals and departures.</li>
              <li><span>Personalized Service: </span>Tailor your journey with our customizable options.</li>
            </ul>
            <p className="cities-subtitle-para">
            Explore the world with us, one city at a time. Book your chauffeur today and travel in unparalleled luxury and comfort.
            </p>
            <p className="cities-subtitle-para">For bookings and inquiries, please contact us at </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CitiesAndClasses;
