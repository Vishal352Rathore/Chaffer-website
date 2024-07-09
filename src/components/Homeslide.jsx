import React from 'react';
import "../CssStyle/Homeslide.css";
import homeslide1 from "../cab_images/homeslide1.jpg";
import homeslide2 from "../cab_images/homeslide2.jpg";
import homeslide3 from "../cab_images/homeslide3.jpg"

const Homeslide = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
     <div class="carousel-indicators" style={{paddingBottom: '4.25rem' }}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
      <div className="carousel-inner" style={{paddingBottom: '5.25rem' }}>
        <div className="carousel-item active" style={{ height: '720px'}}>
          <img src={homeslide1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <button type="button" className='btn-slide btn btn-outline-light btn-lg bg-danger text-light' style={{marginBottom: '35px' , marginRight: '20px' ,}}>Book A Ride</button>
            <button type="button" className='btn-slide btn btn-outline-light btn-lg bg-transparent text-light' style={{marginBottom: '35px'}}>Contact us</button>
            <p>We Are Your Safe, Affordable, Reliable and Car Service Option</p>
            <h1>PREMIUM CAR SERVICE</h1>
          </div>
        </div>
        <div className="carousel-item" style={{ height: '720px' }}>
          <img src={homeslide2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <button type="button" className='btn-slide btn btn-outline-light btn-lg bg-danger text-light' style={{marginBottom: '35px' , marginRight: '20px'}}>Book A Ride</button>
            <button type="button" className='btn-slide btn btn-outline-light btn-lg bg-transparent text-light' style={{marginBottom: '35px'}}>Contact us</button>
            <p>We help you with everything you'd ever want for you to achieve</p>
            <h1>DYNAMIC CAR SERVICE</h1>
          </div>
        </div>
        <div className="carousel-item" style={{ height: '720px' }} >
          <img src={homeslide3} className="d-block w-100"  alt="..." />
          <div className="carousel-caption d-none d-md-block">
          <button type="button" className='btn-slide btn btn-outline-light btn-lg bg-danger text-light' style={{marginBottom: '35px' , marginRight: '20px'}}>Book A Ride</button>
          <button type="button" className='btn-slide btn btn-outline-light btn-lg bg-transparent text-light' style={{marginBottom: '35px'}}>Contact us</button>

            <p>It's not just any car service, it's an awesome experience</p>
            <h1>AWESOME CAR SERVICE</h1>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Homeslide;
