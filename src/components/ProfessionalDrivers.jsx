import React from "react";
import "../CssStyle/Services.css";
import "../CssStyle/Professionaldrivers.css";
import cabdriver from "../clickable-imgs/executive-cab-driver.jpg";
import customerSatisfaction from "../clickable-imgs/customer-satisfaction.jpg"
import proffessionalDriver from "../clickable-imgs/Professional-driver.jpg"
import customerFeedback from "../clickable-imgs/customer-feedback.png"

const ProfessionalDrivers = () => {
  return (
    <div className="professional">
      <section className="bg-image-aboutus w-100%">
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5">Professional Driver</p>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div class="driver-section">
          <h1 class="our-profession">Our Professional Drivers</h1>
          <div
            className="container pt-5"
            style={{ display: "table", clear: "both", content: "" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Dosis",
                textAlign: "left",
              }}
            >
              <img
                src={cabdriver}
                alt="Pineapple"
                style={{
                  width: "370px",
                  height: "370px",
                  float: "left",
                  margin: "0px 20px",
                }}
              />
              <h4 style={{ fontWeight: "bold" }}>Expertise and Training</h4>
              Our drivers are highly trained professionals with extensive
              experience in providing top-notch chauffeur services. Each driver
              undergoes a rigorous selection process, ensuring that they
              possess: <br />• Comprehensive knowledge of local and regional
              routes.
              <br />• Proficiency in navigating through traffic efficiently and
              safely.
              <br />• Advanced driving skills, certified by recognized driving
              institutions.
            </p>
          </div>
          <div
            className="container pt-5"
            style={{ display: "table", clear: "both", content: "" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Dosis",
                textAlign: "left",
              }}
            >
              <img
                src={proffessionalDriver}
                alt="Pineapple"
                style={{
                  width: "370px",
                  height: "370px",
                  float: "right",
                  margin: "0px 20px",
                }}
              />
              <h4 style={{ fontWeight: "bold" }}>Professionalism</h4>
              Our drivers exemplify the highest standards of professionalism,
              guaranteeing a seamless and enjoyable travel experience. They are:
              <br />• Punctual and reliable, always ensuring timely arrivals and
              departures. <br /> • Courteous and respectful, offering a warm and
              welcoming demeanor. <br /> • Discreet and confidential,
              maintaining the privacy and security of all our clients.
            </p>
          </div>
          <div
            className="container pt-5"
            style={{ display: "table", clear: "both", content: "" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Dosis",
                textAlign: "left",
              }}
            >
              <img
                src={customerSatisfaction}
                alt="Pineapple"
                style={{
                  width: "370px",
                  height: "370px",
                  float: "left",
                  margin: "0px 20px",
                }}
              />
              <h4 style={{ fontWeight: "bold" }}>
                Commitment to Customer Satisfaction
              </h4>
              Customer satisfaction is our top priority, and our drivers play a
              crucial role in achieving this. They are dedicated to:
              <br /> • Providing personalized service, tailored to meet the
              specific needs and preferences of each client. <br /> • Ensuring
              comfort and convenience, with a focus on creating a relaxed and
              stress-free environment.
              <br /> • Addressing any special requests or requirements promptly
              and efficiently.
            </p>
          </div>
          <div
            className="container pt-5"
            style={{ display: "table", clear: "both", content: "" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Dosis",
                textAlign: "left",
              }}
            >
              <img
                src={cabdriver}
                alt="Pineapple"
                style={{
                  width: "370px",
                  height: "370px",
                  float: "right",
                  margin: "0px 20px",
                }}
              />
              <h4 style={{ fontWeight: "bold" }}>Safety and Reliability</h4>
              Safety is at the forefront of our service. Our drivers are
              committed to:
              <br />• Adhering to all traffic regulations and safety standards.
              <br />• Regularly inspecting and maintaining vehicles to ensure
              optimal performance and safety.
              <br />• Staying updated with the latest safety protocols and
              practices.
            </p>
          </div>
          <div
            className="container pt-5"
            style={{ display: "table", clear: "both", content: "" }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                fontFamily: "Dosis",
                textAlign: "left",
              }}
            >
              <img
                src={customerFeedback}
                alt="Pineapple"
                style={{
                  width: "370px",
                  height: "370px",
                  float: "left",
                  margin: "0px 20px",
                }}
              />
              <h4 style={{ fontWeight: "bold" }}>Customer Feedback</h4>
              We take pride in the positive feedback we receive from our
              clients, which is a testament to the exceptional service provided
              by our drivers. Here’s what some of our clients have to say:
              <br />• The driver was professional and courteous, making my
              journey smooth and enjoyable.
              <br />• I felt completely safe and comfortable throughout the
              trip, thanks to the driver’s expertise.
              <br />• The driver went above and beyond to accommodate my needs,
              providing an excellent experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProfessionalDrivers;
