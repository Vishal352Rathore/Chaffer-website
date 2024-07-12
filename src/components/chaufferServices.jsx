import React from "react";
import pdf from "../cab_images/download.png";
import address from "../cab_images/address.png";
import phone from "../cab_images/phone.png";
import email from "../cab_images/email.png";
import "../CssStyle/ChaufferServices.css";
import businessExecutive from "../clickable-imgs/business-executive-cab.jpg";
import Events from "../clickable-imgs/Events.png";
import airportTrasfer from "../clickable-imgs/AirportTransfer.png"
import { useLocation } from "react-router-dom";


const ChaufferServices = () => {
  const location = useLocation();
  const { from } = location && (location.state || { from: "Bussiness Events" });
console.log("Redirected from:", from);



  return (
    <div className="chaufferservices">
      <section className="bg-image-aboutus w-100%">
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5">Chauffer Services</p>
            </div>
          </div>
        </section>
      </section>

      <section className="container pt-5 customwidth mb-5 pb-5">
        <div className="row">
      {  from === "Bussiness Events" &&  <div className="col-md-8">
            <img src={businessExecutive} class="d-block servicecar w-100" alt="..." />

            <div className="pt-5">
              <div className="chauffer-service">
                <p className="chauffer-service-title">
                  BUSINESS & CORPORATE EVENTS
                </p>
                <p className="chauffer-service-subtitle">
                  Are you on a business trip to expand your operations and
                  increase your presence in different markets? Our team of
                  professionals can help you build relationships with customers.
                </p>
              </div>
            </div>
          </div>}
        {from === "Events" &&   <div className="col-md-8">
            <img src={Events} class="d-block servicecar w-100" alt="..." />

            <div className="pt-5">
              <div className="chauffer-service">
                <p className="chauffer-service-title">
                  EVENTS
                </p>
                <p className="chauffer-service-subtitle">
                Weddings and events are special occasions that are meant to create lasting memories that will be cherished for years to come. With careful planning and attention to detail, we will make your weddings and events more memorable and enjoyable for you and your loved ones.
                </p>
              </div>
            </div>
          </div>}
      { from === "Airport Transfer" &&    <div className="col-md-8">
            <img src={airportTrasfer} class="d-block servicecar w-100" alt="..." />

            <div className="pt-5">
              <div className="chauffer-service">
                <p className="chauffer-service-title">
                AIRPORT TRANSFERS 
                </p>
                <p className="chauffer-service-subtitle">
                Are you traveling to Lagos Airports for a business trip in Nigeria? Ensure you will arrive on time at your meeting by booking your Sedan or Minivan in advance. Upon ending your business trip, we can transport you back to the airport, so you don’t miss your flight home.
                </p>
              </div>
            </div>
          </div>}
          <div className="col-md-4">
            <div className="diffservices  pt-4 pb-4">
              <ul
                title="Service"
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  fontSize: "25px",
                  color: " #1E1E1E;",
                }}
              >
                <li>
                  <span
                    className="pe-3"
                    style={{ color: "rgb(235, 225, 175)" }}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  Bussiness Class
                </li>
                <li>
                  <span
                    className="pe-3"
                    style={{ color: "rgb(235, 225, 175)" }}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  Promo
                </li>
                <li>
                  <span
                    className="pe-3"
                    style={{ color: "rgb(235, 225, 175)" }}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  Airport transport
                </li>
                <li>
                  <span
                    className="pe-3"
                    style={{ color: "rgb(235, 225, 175)" }}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  Chauffer Service
                </li>
                <li>
                  <span
                    className="pe-3"
                    style={{ color: "rgb(235, 225, 175)" }}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  Weddings
                </li>
                <li>
                  <span
                    className="pe-3"
                    style={{ color: "rgb(235, 225, 175)" }}
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </span>
                  Parties
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <div
                className="pt-2 ps-3  pe-3"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "1.4%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="text-start">
                  <strong style={{ color: "#fff" }}>Address</strong>
                  <p style={{ color: "#ccc" }}>
                    329,shubash marg ,North Himachal,India
                  </p>
                </div>
                <img
                  src={address}
                  alt="not found"
                  className="address-img ps-2 pe-3 pt-2 pb-2"
                />
              </div>
            </div>
            <div className="pt-2">
              <div
                className="pt-2 ps-3  pe-3"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "1.4%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="text-start">
                  <strong style={{ color: "#fff" }}>Phone</strong>
                  <p style={{ color: "#ccc" }}>9956592348</p>
                </div>
                <img
                  src={phone}
                  alt="not found"
                  className="phone-img ps-3 pe-3 pt-2"
                />
              </div>
            </div>
            <div className="pt-2">
              <div
                className="pt-2 ps-3 pe-3"
                style={{
                  backgroundColor: "#1e1e1e",
                  borderRadius: "1.4%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="text-start">
                  <strong style={{ color: "#fff" }}>Email</strong>
                  <p style={{ color: "#ccc" }}>info@prodrive.com</p>
                </div>
                <img
                  src={email}
                  alt="not found"
                  className="email-img ps-3 pe-3 pt-2 pb-1"
                />
              </div>
            </div>

            <div className="pt-2">
              <div
                className="pt-3 ps-2 pb-2 pe-3"
                style={{ backgroundColor: "#1e1e1e", borderRadius: "1.4%" }}
              >
                <div
                  className="text-start"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <strong style={{ color: "#fff" }}>
                    Download PDF brochure
                  </strong>{" "}
                  <img
                    src={pdf}
                    alt="not found"
                    className="pdf-img ps-3 pe-3 pt-1 pb-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChaufferServices;
