import React, { useState, useEffect } from "react";
import imageAbout from "../cab_images/img5about.jpg";
import img01 from "../cabimages-22/01.png";
import img02 from "../cabimages-22/02.png";
import img03 from "../cabimages-22/03.png";
import img04 from "../cabimages-22/04.png";
import car1 from "../cabimages-22/bus_1.jpg";
import ourservices1 from "../cabimages-22/1.jpg";
import ourservices2 from "../cabimages-22/2.jpg";
import ourservices3 from "../cabimages-22/3.jpg";
import location from "../cab_images/location.png";
import calender from "../cab_images/calender.png";
import { useNavigate } from "react-router-dom";
import "../CssStyle/Headers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import google from "../cab_images/googleAppimg.png";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import homeBackground from "../videos/home-page-video.webm"

const categories = ["Ride", "Comfort", "City to city", "Airport Transfer"];

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [coordinates, setCoordinates] = useState({
    pickUpLocation: "",
    dropLocation: "",
  });

  const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyCZ0UycRv9Fy9PMDBY-uoU_SkXZGnmjP18";
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
      console.log("islogin", isLogin);
    } else {
      setIsLogin(false);
      console.log("islogin", isLogin);
    }
  }, []);



  const [Info, setInfo] = useState({
    pickUpLocation: "",
    dropLocation: "",
    dateTime: "",
    category: "Ride",
  });

  const [isSuggestionSelected, setIsSuggestionSelected] = useState({ pickUpLocation: false, dropOffLocation: false });


  const handlePlaceSelect = (place ,name) => {
    const { lat, lng } = place.geometry.location;
    setInfo((Info) => ({ ...Info, [name]: place.formatted_address }));
    setCoordinates((prevCoordinates) => ({
      ...prevCoordinates,
      [name]: `${lat()},${lng()}`,
    }));
    console.log("Selected place:", place.formatted_address);
    console.log('Coordinates:name', `${name} ${lat()},${lng()}` );
    setIsSuggestionSelected({ ...isSuggestionSelected, [name]: true });
  };

  const handleChange = (e) => {
    setInfo({ ...Info, [e.target.name]: e.target.value });
    setIsSuggestionSelected({ ...isSuggestionSelected, [e.target.name]: false });
  };

  const handleBlur = (fieldName) => {
    if (!isSuggestionSelected[fieldName]) {
      setInfo({ ...Info, [fieldName]: '' });
    }
  };

  const handleDate = (date, name) => {
    setInfo({ ...Info, [name]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        pickUpLocation: Info.pickUpLocation,
        dropLocation: Info.dropLocation,
        pickUpLocationCoordinates: coordinates.pickUpLocation,
        dropLocationCoordinates: coordinates.dropLocation,
        dateTime: Info.dateTime,
        category: Info.category,
      };

      localStorage.setItem("pickUpLocation", userData.pickUpLocation);
      localStorage.setItem("dropLocation", userData.dropLocation);
      localStorage.setItem(
        "pickUpLocationCoordinates",
        userData.pickUpLocationCoordinates
      );
      localStorage.setItem(
        "dropLocationCoordinates",
        userData.dropLocationCoordinates
      );
      localStorage.setItem("dateTime", userData.dateTime);
      localStorage.setItem("category", userData.category);

      console.log("Bookride Data:", userData);

      e.target.reset();
      navigate("/services/bookride", { state: { from: "Fresh Booking" } });
    } catch (error) {
      console.log("Error in booking ride:", error);
    }
  };

  return (
    <div className="home-container">
      {/* <Header /> */}
     
   
      <div className="bg-image w-100%">
        {/* <button onClick={()=>{ navigate("/services/bookride", { state: { from: "Continue Booking" } })}}>Continue Booking</button> */}
        <video autoPlay muted loop id="myVideo" src={homeBackground}/>
        {/* <div className="text-content customheader">
          <div className="text-div">
            <div className="text-heading-first">
              When you book a chauffeur,
              <br />
              you expect more than just a driver. 
            </div>
            <div className="text-heading-second">
              With the title comes a set of expectations.
            </div>

            <button className="book-btn" onClick={() => navigate("/")}>
              Book a ride
            </button>
          </div>
        </div> */}
      </div>

      <section className="container customheader">
        <div className="custom-form searchform">
          <form className="form-tag" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3 form-contain">
                <label className="form-label ">From</label>
                <LoadScript
                  googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY}
                  libraries={["places"]}
                >
                  <Autocomplete
                    onLoad={(autocomplete) => {
                      autocomplete.addListener("place_changed", () =>
                        handlePlaceSelect(
                          autocomplete.getPlace(),
                          "pickUpLocation"
                        )
                      );
                    }}
                  >
                    <div className="input-div">
                      <span>
                        <img src={location} alt="not found" />
                      </span>
                      <input
                        type="text"
                        className="form-control input-text"
                        placeholder="Address"
                        name="pickUpLocation"
                        value={Info.pickUpLocation}
                        onChange={handleChange}
                        onBlur={() => handleBlur("pickUpLocation")}
                        required
                      />
                    </div>
                  </Autocomplete>
                </LoadScript>
              </div>
              <div className="col-md-3 form-contain">
                <label htmlFor="toaddress" className="form-label">
                  To
                </label>
                <LoadScript
                  googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY}
                  libraries={["places"]}
                >
                  <Autocomplete
                    onLoad={(autocomplete) => {
                      autocomplete.addListener("place_changed", () =>
                        handlePlaceSelect(
                          autocomplete.getPlace(),
                          "dropLocation"
                        )
                      );
                    }}
                  >
                    <div className="input-div">
                      <span>
                        <img src={location} alt="not found" />
                      </span>
                      <input
                        type="text"
                        className="form-control input-text"
                        placeholder="Address"
                        name="dropLocation"
                        value={Info.dropLocation}
                        onChange={handleChange}
                        onBlur={() => handleBlur("dropLocation")}
                        required
                      />
                    </div>
                  </Autocomplete>
                </LoadScript>
              </div>
              <div className="col-md-3 form-contain">
                <label htmlFor="datetime" className="form-label">
                  Date & Time
                </label>
                <div className="input-div media-input-div">
                  <span>
                    <img src={calender} alt="not found" />
                  </span>
                  <DatePicker
                    selected={Info.dateTime}
                    onChange={(date) => handleDate(date, "dateTime")}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="DD/MM/YYYY"
                    minDate={new Date()}
                    className="datapicker"
                    required
                  />
                </div>
              </div>
              <div className="col-md-3 form-contain">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  className="form-select input-text"
                  name="category"
                  value={Info.category}
                  onChange={handleChange}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="search-container">
              <button
                type="submit"
                className="search-btn"
                onClick={() => handleSubmit}
              >
                Book Ride
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="chooseUs">
        {/* r customheader */}
        <div className="container customheader">
          <div className=" row bg-white media-bg-white">
            <div className="col-md-12 ">
              <div className="gen-heading pb-4">
                <h1>How GenAlphaPlas Works</h1>
                <p className="explore">
                  Explore our first className limousine & car rental services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container  customheader">
          <div className="row pb-5 bg-white">
            <div className="col-md-3">
              <div className="">
                <div className="d-flex justify-content-center">
                  <img
                    src={img01}
                    alt="not found"
                    className="online-booking-img"
                  />
                </div>
                <div className="explore-content p-3">
                  <h3 className="text-title">Easy Online Booking</h3>
                  <p className="paragraph font-dosis p-3">
                    Lorem ipsum dolor sit amet consectaadipisicing elit. magnam
                    dolor accusamus dolores .
                  </p>
                </div>
              </div>
              
            </div>
            <div className="col-md-3">
                <div className="">
                  <div className="d-flex justify-content-center">
                    <img
                      src={img02}
                      alt="not found"
                      className="professionaldriver-img"
                    />
                  </div>
                  <div className="explore-content p-3">
                    <h3 className="text-title">Professional Drivers</h3>
                    <p className="paragraph font-dosis p-3">
                      A new Shuttle train service between Singapore and Johar
                      Bahru kicked off on Wednesday.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="">
                  <div className="d-flex justify-content-center">
                    <img
                      src={img03}
                      alt="not found"
                      className="carbrands-img"
                    />
                  </div>
                  <div className="explore-content p-3">
                    <h3 className="text-title">Variety of Cars Brands</h3>
                    <p className="paragraph font-dosis p-3">
                      The service ,called Shuttle Tebrau ,is operated by
                      Malaysia's JB Sentral in just five minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="">
                  <div className="d-flex justify-content-center">
                    <img
                      src={img04}
                      alt="not found"
                      className="paymentcard-img"
                    />
                  </div>
                  <div className="explore-content  p-3">
                    <h3 className="text-title">Online Payment</h3>
                    <p className="paragraph font-dosis p-3">
                      York AirPort Service is a Private bus company that
                      provides transportation area airports and Manha .
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="aboutus ">
        <div className="container customheader">
          <div className="row">
            <div className="col-md-6">
              <img src={imageAbout} alt="not found" className="image-aboutus" />
            </div>
            <div className=" col-md-6 about-text-align">
              <div className="aboutus-text-container">
                <h3 className="font-inria">About Us</h3>

                <p className="aboutus-details font-inria">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry.Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                </p>

                <button className="aboutus-btn font-inria">Book a ride</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-container">
        <div className="container customheader mt-5 pt-5 ">
          <div className="row ">
            <h3>Our Services</h3>
            <p>our aims is to fill a gap in niche market of Trade</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div>
                <img src={ourservices1} alt="not found" />
              </div>
              <h3>Chauffer Service</h3>
            </div>
            <div className="col-md-4">
              <div>
                <img src={ourservices2} alt="not found" />
              </div>
              <h3>Limousin Events</h3>
            </div>
            <div className="col-md-4">
              <div>
                <img src={ourservices3} alt="not found" />
              </div>
              <h3>Airport Transfer</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="anywhere">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="anywhere-text">
                <h1>Our anywhere your need us to take</h1>
                <p className="fw-lighter">
                  Not only taking to night parties, weddings, casinos, birthdays
                  but <br />
                  we also take you to anywhere you want to go.
                </p>
                <div>
                  <img src={google} alt="not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prodrive-container">
        <div className="container">
          <div className="row">
            <p>GenAlphaPlas Pro Fleet</p>
            <p>
              We also take custom orders and will help you acquire a specific
              yacht
            </p>
          </div>
        </div>
      </section>

      <section className="car-container">
        <div className="container ">
          <div className="owl-carousel owl-theme">
            <div className="owl-item">
              <div className=" d-flex flex-column">
                <div>
                  <img src={car1} alt="not found" />
                </div>
                <p>
                  Mercedes Benz S350 L BlueTec
                  <br />1 Matic
                </p>
                <div className="icon-container">
                  <span className="outer-span">
                    <i className="fa-regular fa-user"></i>
                    <span>Max. 3</span>
                  </span>
                  <span className="outer-span">
                    <i className="fa-regular fa-envelope"></i>
                    <span>Max. 2</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="owl-item">
              <div className=" d-flex flex-column">
                <div>
                  <img src={car1} alt="not found" />
                </div>
                <p>
                  Mercedes Benz S350 L BlueTec
                  <br />2 Matic
                </p>
                <div className="icon-container">
                  <span className="outer-span">
                    <i className="fa-regular fa-user"></i>
                    <span>Max. 3</span>
                  </span>
                  <span className="outer-span">
                    <i className="fa-regular fa-envelope"></i>
                    <span>Max. 2</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="owl-item">
              <div className=" d-flex flex-column">
                <div>
                  <img src={car1} alt="not found" />
                </div>
                <p>
                  Mercedes Benz S350 L BlueTec
                  <br />3 Matic
                </p>
                <div className="icon-container">
                  <span className="outer-span">
                    <i className="fa-regular fa-user"></i>
                    <span>Max. 3</span>
                  </span>
                  <span className="outer-span">
                    <i className="fa-regular fa-envelope"></i>
                    <span>Max. 2</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="owl-item">
              <div className=" d-flex flex-column">
                <div>
                  <img src={car1} alt="not found" />
                </div>
                <p>
                  Mercedes Benz S350 L BlueTec
                  <br />4 Matic
                </p>
                <div className="icon-container">
                  <span className="outer-span">
                    <i className="fa-regular fa-user"></i>
                    <span>Max. 3</span>
                  </span>
                  <span className="outer-span">
                    <i className="fa-regular fa-envelope"></i>
                    <span>Max. 2</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="owl-item">
              <div className=" d-flex flex-column">
                <div>
                  <img src={car1} alt="not found" />
                </div>
                <p>
                  Mercedes Benz S350 L BlueTec
                  <br />5 Matic
                </p>
                <div className="icon-container">
                  <span className="outer-span">
                    <i className="fa-regular fa-user"></i>
                    <span>Max. 3</span>
                  </span>
                  <span className="outer-span">
                    <i className="fa-regular fa-envelope"></i>
                    <span>Max. 2</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-container pb-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                Download the <span className="app">app</span>
              </h1>
              <p>
                Easily book change or cancel rider on the go think of it as
                peace of mind in the palm of your hand
              </p>
              <div className="google-img-container ">
                <img src={google} alt="not found" className="google-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}

export default Home;
