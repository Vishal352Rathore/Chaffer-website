import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import axios from "axios";
import "../CssStyle/BookingDonePage.css";

const BookingDonePage = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth - 20, // Adjust width to prevent overflow
    height: window.innerHeight - 20, // Adjust height to prevent overflow
  });

  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsConfettiVisible(true);
    sendNotification();
    setTimeout(() => {
      setIsConfettiVisible(false);
      navigate("/");
    }, 5000);
  };

  useEffect(() => {
    handleSuccess();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth - 20, // Adjust width to prevent overflow
        height: window.innerHeight - 20, // Adjust height to prevent overflow
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendNotification = async (token, title, body) => {
    const serverKey = "YOUR_SERVER_KEY"; // Obtain this from Firebase Console

    const message = {
      notification: {
        title: title,
        body: body,
      },
      token: token,
    };

    try {
      await axios.post("https://fcm.googleapis.com/fcm/send", message, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${serverKey}`,
        },
      });
      console.log("Notification sent successfully");
    } catch (error) {
      console.error("Error sending notification", error);
    }
  };

  return (
    <div className="bookingdone-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {isConfettiVisible && (
              <Confetti
                width={windowDimensions.width}
                height={windowDimensions.height}
                numberOfPieces={300}
                gravity={0.2}
              />
            )}
            <p className="bookingdone-message">Booking Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDonePage;
