import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Upcoming from "./HistoryStages/Upcoming";
import Past from "./HistoryStages/Past";
import Cancel from "./HistoryStages/Cancel";
import "../CssStyle/History.css";

const History = () => {
  const [loading, setLoading] = useState(true);
  const user_id = localStorage.getItem("user_id");

  const URL = ` https://chauffer-staging-tse4a.ondigitalocean.app/v1/ride/getRide`;
  const token = localStorage.getItem("userToken");
  const [rideData, setRideData] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("upcoming");

  const headers = {
    "Content-Type": "application/json",
     token: token,
  };

  const data = {
    userId: user_id
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          try {
            const response = await axios.post(URL,data ,{
              method: "POST",
              headers: headers,
            });

            if (response.status) {
              setRideData(response.data.items);
              setLoading(false);
            } else if (!response.status) {
              navigate('/login', { state: { from: "/history" } });
            }
            
          } catch (error) {
            console.error("response for ride", error);
            setLoading(false);
          }
        } else {
          navigate("/login", { state: { from: "/" } });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
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
    <div className="history-whole-container ">
      <section className="bg-image-aboutus w-100%">
        {/* <Header /> */}
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
        <main>   {loading ? <div><p>Loading...</p></div> : renderPage()}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default History;
