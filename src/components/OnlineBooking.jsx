import React from "react";
import cabdriver from "../clickable-imgs/executive-cab-driver.jpg";
import customerSatisfaction from "../clickable-imgs/customer-satisfaction.jpg";
import proffessionalDriver from "../clickable-imgs/Professional-driver.jpg";
import customerFeedback from "../clickable-imgs/customer-feedback.png";

const OnlineBooking = () => {
  return (
    <div className="online-booking">
      <section className="bg-image-aboutus w-100%">
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5"> Easy Online Booking</p>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div class="driver-section" >
          <h1 class="our-profession">Online Booking</h1>
          <p>
            Effortless Scheduling for Your Comfort Booking your GenAlpha Plus
            service has never been easier. Our user-friendly online platform is
            designed with your convenience in mind, ensuring a smooth and quick
            reservation process. Here’s what to expect:
          </p>

          <ol>
           
            <li > Enter Your Details: Fill in your pickup and drop-off locations,
            preferred vehicle type, and any special requirements. </li>
            <li >Choose Your
            Service: Select the service that ideally fits your needs, whether
            it's airport transfers, corporate travel, or special events.</li>
            <li >Instant Confirmation: Receive immediate confirmation of your booking
            along with all the details, including your chauffeur’s contact
            information.</li>


          </ol>
      
        </div>
      </section>
      <section>
        <div class="driver-section">
          <h1 class="our-profession">Why Book with Us?</h1>
      
          <p>
          1.	24/7 Availability: Our online booking system is accessible anytime, anywhere, ensuring you can make reservations at your convenience.
            </p>
          <p>
          2.	Real-Time Pricing: Get transparent and competitive pricing with no hidden fees.
          </p>
          <p>
          3.	Secure Payments: Enjoy peace of mind with our secure online payment options.
          </p>
          <p>
          4.	Personalized Service: Tailor your ride to your preferences with our customizable options and special requests feature.
          </p>
        </div>
      </section>
      <section>
        <div class="driver-section">
          <h1 class="our-profession">Your Comfort is Our Priority: </h1>
      
          <p>
          From the moment you book to the end of your journey, we strive to provide a seamless and luxurious experience. Our professional chauffeurs and top-of-the-line vehicles are dedicated to making your travel smooth and stress-free.
            </p>
          <p>
          Book Now and Travel Style! Experience the ultimate in comfort and convenience with our easy online booking system. Reserve your chauffeur today and let us handle the rest.
          </p>
          <p>
          Download the GenAlpha Plus app for a faster pick-up with the GenAlpha Plus hailing service, available only in select areas. Within moments, you are greeted by a fully licensed driver who transports you to your destination. A fleet of stylish and clean cars is available for pre-booked and chauffeur-hailed trips. 
          </p>
         
        </div>
      </section>
    </div>
  );
};

export default OnlineBooking;
