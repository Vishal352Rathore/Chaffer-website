import React from 'react'
import { useEffect ,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import Confetti from 'react-confetti';

const BookingDonePage = () => {
  // const [isConfettiVisible, setIsConfettiVisible] = useState(false);
    const navigate = useNavigate();
    const URL = " https://chauffer-staging-tse4a.ondigitalocean.app/v1/ride/bookRide";
    const [rideBookingData, setrideBookingData] = useState({
         "pickUpLocation": "",
          "dropLocation": "",
          "date": "",
          "time": "",
          "userId": "",
          "vehicleId": "",
          "bookingFor": "",
          "flightNumber": "",
          "notesForChauffer": "",
          "referenceNumberOrCostCenter": "",
          "firstName": "",
          "lastName": "",
          "email": "@gmail.com",
          "phoneNumber": null,
          "status": 0,
          "cardName": " ",
          "cardNumber": null,
          "expiryDate": "02/26",
          "cvv": null,
          "amount": null
  });

  // const handleSuccess = () => {
  //   setIsConfettiVisible(true);
  //   setTimeout(() => {
  //     setIsConfettiVisible(false);
  //   }, 5000);
  // };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post(URL , rideBookingData);
          setrideBookingData(response.data.items);
          console.log("Book ride response :",response)

          // if(response.data.items)
          //   {
          //     setIsConfettiVisible(true);
          //     setTimeout(() => {
          //       setIsConfettiVisible(false);
          //     }, 1000);
          //   }
          toast.success("Ride booked Successfully ! ")
          navigate('/');
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);

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
