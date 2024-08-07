import React,{useEffect} from "react";
import homeslide1 from "../cab_images/backgroundslide1.jpg";
import homeslide2 from "../cab_images/backgroundslide2.jpg";
import homeslide3 from "../cab_images/backgroundslide3.jpg";
import "../CssStyle/Homeslide.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Homeslide = React.memo(() => {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 4000
      });
    }
  }, []);
  return (
    <div className="home_slide_carousel">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeslide1} className="d-block w-100" alt="Slide 1"/>
            <div className="carousel-caption">
              <button
                type="button"
                className="btn-slide1 btn-outline-light bg-danger text-light"
              >
                Book A Ride
              </button>
              <button
                type="button"
                className="btn-slide2 btn-outline-light bg-transparent text-light"
              >
                Contact us
              </button>
              <p className="text-size">
                We Are Your Safe, Affordable, Reliable and Car Service Option
              </p>
              <h1 className="text-h1">PREMIUM CAR SERVICE</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homeslide2} className="d-block w-100" alt="Slide 2"/>
            <div className="carousel-caption">
              <button
                type="button"
                className="btn-slide1 btn-outline-light bg-danger text-light"
              >
                Book A Ride
              </button>
              <button
                type="button"
                className="btn-slide2 btn-outline-light bg-transparent text-light"
              >
                Contact us
              </button>
              <p className="text-size">
                We help you with everything you'd ever want for you to achieve
              </p>
              <h1 className="text-h1">DYNAMIC CAR SERVICE</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={homeslide3} className="d-block w-100" alt="Slide 3"/>
            <div className="carousel-caption">
              <button
                type="button"
                className="btn-slide1 btn-outline-light bg-danger text-light"
              >
                Book A Ride
              </button>
              <button
                type="button"
                className="btn-slide2 btn-outline-light bg-transparent text-light"
              >
                Contact us
              </button>
              <p className="text-size">
                It's not just any car service, it's an awesome experience
              </p>
              <h1 className="text-h1">AWESOME CAR SERVICE</h1>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
});
export default Homeslide;












