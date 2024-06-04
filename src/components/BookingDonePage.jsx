// import React from 'react'
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import {intialStage1 , intialBookingData1 , intialPaymentData1} from '../Actions/actions.js'
// // import Confetti from 'react-confetti';

// const BookingDonePage = () => {
//   // const [isConfettiVisible, setIsConfettiVisible] = useState(false);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//     setTimeout(() => {
//       dispatch(intialStage1());
//       dispatch(intialBookingData1());
//       dispatch(intialPaymentData1());
//       navigate("/home")
//     }, 2000);
//     }, [])
    
    
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Confetti from 'react-confetti';
import bookdone_gif from "../cab_images/bookdone-gif.gif";
import axios from "axios";
import "../CssStyle/BookingDonePage.css";
import {intialStage1 , intialBookingData1 , intialPaymentData1} from '../Actions/actions.js'


const BookingDonePage = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth - 20, // Adjust width to prevent overflow
    height: window.innerHeight - 20 // Adjust height to prevent overflow
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = () => {
    setIsConfettiVisible(true);
    setTimeout(() => {
      setIsConfettiVisible(false);
      dispatch(intialStage1());
      dispatch(intialBookingData1());
      dispatch(intialPaymentData1());
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



