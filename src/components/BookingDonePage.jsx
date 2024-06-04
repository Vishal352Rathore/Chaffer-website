import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {intialStage1 , intialBookingData1 , intialPaymentData1} from '../Actions/actions.js'
// import Confetti from 'react-confetti';

const BookingDonePage = () => {
  // const [isConfettiVisible, setIsConfettiVisible] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
    setTimeout(() => {
      dispatch(intialStage1());
      dispatch(intialBookingData1());
      dispatch(intialPaymentData1());
      navigate("/home")
    }, 2000);
    }, [])
    
    

  // const handleSuccess = () => {
  //   setIsConfettiVisible(true);
  //   setTimeout(() => {
  //     setIsConfettiVisible(false);
  //   }, 5000);
  // };
  
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

  return (
    <div>
       {/* <button onClick={handleSuccess}>Show Success</button>
      {isConfettiVisible && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          gravity={0.2}
        />
      )} */}
      <p> Booking Done</p>
    </div>
  )
}

export default BookingDonePage
