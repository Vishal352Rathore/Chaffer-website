import React from 'react'
import { useNavigate } from 'react-router-dom';
// import Confetti from 'react-confetti';

const BookingDonePage = () => {
  // const [isConfettiVisible, setIsConfettiVisible] = useState(false);
    const navigate = useNavigate();
    

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
