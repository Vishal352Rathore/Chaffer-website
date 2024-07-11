import React from 'react'
import cabdriver from "../clickable-imgs/executive-cab-driver.jpg";
import customerSatisfaction from "../clickable-imgs/customer-satisfaction.jpg"
import proffessionalDriver from "../clickable-imgs/Professional-driver.jpg"
import customerFeedback from "../clickable-imgs/customer-feedback.png"

const CarsBrands = () => {
  return (
    <div className="car-brands">
    <section className="bg-image-aboutus w-100%">
      <section className="container customheader">
        <div className="row">
          <div className="text-content-aboutus">
            <p className="text-heading-first pb-5">Variety of Cars Brands</p>
          </div>
        </div>
      </section>
    </section>
    <section>
      <div class="driver-section">
        <h1 class="our-profession">Cars Brands</h1>
         <p>At GenAlpha Plus, we take pride in offering a diverse and meticulously maintained fleet of vehicles to meet all your transportation needs. Whether you require transportation for business, leisure, or special occasions, our vehicles are designed to provide the utmost comfort, safety, and style. </p>
      </div>
    </section>
  </div>
  )
}

export default CarsBrands