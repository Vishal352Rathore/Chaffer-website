import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Upcoming from "./HistoryStages/Upcoming";
import Past from "./HistoryStages/Past";
import Cancel from "./HistoryStages/Cancel";
import "../CssStyle/History.css";
import Footer from "../Shared/Footer";

const History = () => {
  const URL =
    "https://chauffer-staging-tse4a.ondigitalocean.app/v1/ride/allRide";
  const token = localStorage.getItem("token");
  const [rideData, setRideData] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("upcoming");

  const headers = {
    "Content-Type": "application/json",
    token: token,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get(URL, {
            method: "GET",
            headers: headers,
          });
          console.error("response for ride", response);
          setRideData(response.data.items);
        } else {
          navigate("/login", { state: { from: "/history" } });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "upcoming":
        return <Upcoming rideData={rideData} />;
      case "past":
        return <Past rideData={rideData} />;
      case "cancel":
        return <Cancel rideData={rideData} />;
      default:
        return <Upcoming rideData={rideData} />;
    }
  };

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <div className="city-conatainer ">
       <section className="bg-image-aboutus w-100%">
        <Header/>
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5">History</p>
            </div>
          </div>
        </section>
      </section>

      <div className="history-container mb-5 pb-5">
        <header>
          <nav className="tab-bar-container">
            <ul className="tab-bar">
              {["upcoming", "past", "cancel"].map((tab) => (
                <li
                  key={tab}
                  className={`nav-item ${
                    currentPage === tab ? "selected-history-tab" : ""
                  }`}
                  onClick={(e) => handlePageChange(e, tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main>{renderPage()}</main>
      </div>
      <Footer/>
    </div>
  );
};

export default History;
