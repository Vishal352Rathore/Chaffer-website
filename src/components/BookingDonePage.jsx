import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import bookdone_gif from "../cab_images/bookdone-gif.gif";
import axios from "axios";
import "../CssStyle/BookingDonePage.css";

const BookingDonePage = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth - 20, // Adjust width to prevent overflow
    height: window.innerHeight - 20 // Adjust height to prevent overflow
  });
  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsConfettiVisible(true);
    setTimeout(() => {
      setIsConfettiVisible(false);
      navigate('/');
    }, 5000);
  };

  useEffect(() => {
    handleSuccess();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth - 20, // Adjust width to prevent overflow
        height: window.innerHeight - 20 // Adjust height to prevent overflow
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bookingdone-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            {isConfettiVisible && (
              <Confetti
                width={windowDimensions.width}
                height={windowDimensions.height}
                numberOfPieces={300}
                gravity={0.2}
              />
            )}
            <p className='bookingdone-message'>Booking Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDonePage;



  // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.post(URL , rideBookingData);
    //       setrideBookingData(response.data.items);
    //       console.log("Book ride response :",response);
    //       navigate('/');
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
