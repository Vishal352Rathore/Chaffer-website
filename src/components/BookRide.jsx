import React from "react";
import logo from "../cab_images/logo.png";
import { useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import MultiStepForm from "./StepBar";
import ServiceClass from "./ServiceClass";
import Pickup from "./Pickup";
import Payment from "./Payment";
import BookingDonePage from "./BookingDonePage";
import "../CssStyle/StepBar.css";

const CHECKOUT_STEPS = [
  {
    name: "Service Class",
    Component: ServiceClass,
  },
  {
    name: "Payment",
    Component: Payment,
  },
  {
    name: "Done",
    Component: BookingDonePage,
  },
];

const BookRide = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    if (
      localStorage.getItem("category") === "Airport Transfer" &&
      CHECKOUT_STEPS.length < 4
    ) {
      // Add Pickup Info step if condition is true
      console.log(
        "Category from If airport transfer",
        localStorage.getItem("category")
      );
      CHECKOUT_STEPS.splice(1, 0, {
        name: "Pickup Info",
        Component: Pickup,
      });
    }else{
      console.log(
        "Category from else pick up info",
        localStorage.getItem("category")
      );
  
      const pickupInfoIndex = CHECKOUT_STEPS.findIndex(step => step.name === "Pickup Info");
      if (localStorage.getItem("category") !== "Airport Transfer" && pickupInfoIndex !== -1) {
        CHECKOUT_STEPS.splice(pickupInfoIndex, 1);
      }
    }
  }, []);

  const topRef = useRef(null);


  return (
    <div ref={topRef} className="bookride-container">
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="signup-logo-container">
              <img src={logo} alt="not-found" onClick={() => navigate("/")} />
            </div>
          </div>
        </div>
      </section>

      <section className="row">
        <div className="col-md-12 ">
          <div className="serviceclass">
            <MultiStepForm topRef={topRef} stepsConfig={CHECKOUT_STEPS} actionIndex={1} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookRide;
