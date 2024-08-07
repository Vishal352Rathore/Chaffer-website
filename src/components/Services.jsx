import React from "react";
import { useNavigate } from "react-router-dom";
import "../CssStyle/Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ourservices1 from "../cabimages-22/1.jpg";
import ourservices2 from "../cabimages-22/2.jpg";
import ourservices3 from "../cabimages-22/3.jpg";
const Services = () => {
  const navigate = useNavigate();

  
  return (
    <div className="services ">
      <section className="bg-image-aboutus w-100%">
      
        <section className="container customheader">
          <div className="row">
            <div className="text-content-aboutus">
              <p className="text-heading-first pb-5">Services</p>

            </div>
          </div>
        </section>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="our-services">Our Services</p>
            <p className="our-services-about">
              our aim is to fill a gap in niche market of Trade{" "}
            </p>
          </div>
        </div>
      </section>
      
      <section className="container m-auto ">
        <div className="row">
          <div className="col-md-12  ">
            <div className="container">
              <div className="row">
                <div className="col-md-4"onClick={()=>navigate('/services/chaufferservices' ,{ state: { from: "Bussiness Events" }})}>
                  <img
                    src={ourservices1}
                    alt="not found"
                    className="img-size-services"
                  />
                  <p className="img-name-service">Business & Corporate Events</p>
                </div>
                <div className="col-md-4 " onClick={()=>navigate('/services/chaufferservices' ,{ state: { from: "Events" }})}>
                  <img
                    src={ourservices2}
                    alt="not found"
                    className="img-size-services"
                  />
                  <p className="img-name-service">Events</p>
                </div>
                <div className="col-md-4 " onClick={()=>navigate('/services/chaufferservices' ,{ state: { from: "Airport Transfer" }})}>
                  <img
                    src={ourservices3}
                    alt="not found"
                    className="img-size-services"
                  />
                  <p className="img-name-service">Airport Transfer</p>
                </div>
                {/* <div className="col-md-3 " onClick={()=>navigate('/services/chaufferservices')}>
                  <img
                    src={img1}
                    alt="not found"
                    className="img-size-services"
                  />
                  <p className="img-name-service">Airport Transfer</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="container container d-flex justify-content-center mb-5 pb-5">
        <div className="row">
          <div className="col-md-12  m-auto ">
            <nav aria-label="Page navigation example">
              <ul class="pagination ">
                <li class="page-item">
                <p class="page-link" onClick={()=>navigate("")} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </p>
                </li>
                <li class="page-item">
                  <p class="page-link" onClick={()=>navigate("")}>
                    1
                  </p>
                </li>
                <li class="page-item">
                <p class="page-link" onClick={()=>navigate("")}>
                    2
                  </p>
                </li>
                <li class="page-item">
                  <p class="page-link" onClick={()=>navigate("")}>
                    3
                  </p>
                </li>
                <li class="page-item">
                  <p class="page-link" onClick={()=>navigate("")} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section> */}

      
    </div>
  );
};

export default Services;
