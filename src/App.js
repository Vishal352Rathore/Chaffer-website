// import "./App.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Shared/Footer";
import Header from "./components/Header";

import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";
import Services from "./components/Services";
import CitiesAndClasses from "./components/CitiesAndClasses";
import Signup from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
import ChaufferServices from "./components/chaufferServices";
import OtpVerify from "./LoginSignup/OtpVerify";
import NewPassword from "./LoginSignup/NewPassword";
import ForgotPassword from "./LoginSignup/ForgotPassword";
// import ResetPassword from '../LoginSignup/ResetPassword';
import ServiceClass from './components/ServiceClass';
import Pickup from './components/Pickup';
import PaymentCard from './components/Payment';
import TermsAndCondition from './components/TermsAndCondition';
import BookRide from "./components/BookRide";
import History from "./components/History";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
      
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="forgotpassword/otpverify" element={<OtpVerify />} />
        <Route
          path="forgotpassword/otpverify/newpassword"
          element={<NewPassword />}
        />
        <Route
          path="services/chaufferservices"
          element={<ChaufferServices />}
        />
         <Route path='services/bookride' element={<BookRide/>}/>
        <Route path='services/serviceclass' element={<ServiceClass/>}/>
        <Route path='services/serviceclass/pickup' element={<Pickup/>}/>
        <Route path='services/serviceclass/pickup/payment' element={<PaymentCard/>}/>
        
        <Route path="/" element={<DefaultLayout />} >
        <Route index element={<Home />} />
        <Route path="home" element={<Home/>} />
      
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="services" element={<Services />} />
      
        <Route path="cities" element={<CitiesAndClasses />} />
        <Route path="termsandcondition" element={<TermsAndCondition />} />
        {/* <Route path='/resetpassword' element={<ResetPassword/>}/> */}
       
        <Route path='citiesandclasses' element={<CitiesAndClasses/>}/>
        <Route path='history' element={<History/>}/>

        </Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


const SimplePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <button onClick={togglePopup}>Close</button>
          <p>This is a simple popup!</p>
        </div>
      )}
    </div>
  );
};

export {SimplePopup};
