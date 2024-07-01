import { React, useEffect, useState } from "react";
import "../CssStyle/ServiceClass.css";
import "bootstrap/dist/css/bootstrap.min.css";
import car1 from "../cab_images/blackcar1.png";
import family from "../cab_images/familyicon.png";
import bag from "../cab_images/bagicon.png";
import selectedIcon from "../cab_images/selected.png";
import axios from "axios";
const ServiceClass = ({ handleNextButon, from }) => {
  
  // const { from } = location.state === null ? null : location.state  ;
  const URL =
    // "https://chauffer-staging-tse4a.ondigitalocean.app/v1/vehicle/getAllVehicle";
    "https://chauffer-staging-tse4a.ondigitalocean.app/v1/vehicle/getVehiclesWithinRadius"


  const pickUpLocationCoordinates = localStorage.getItem("pickUpLocationCoordinates");
  const [fromLatitude,fromLongitude] = pickUpLocationCoordinates.split(',');
  const dropLocationCoordinates = localStorage.getItem("dropLocationCoordinates");
  const [toLatitude ,toLongitude] = dropLocationCoordinates.split(',');

  console.log("fromLatitude",fromLatitude)
  console.log("fromLongitude",fromLongitude);

  console.log("toLatitude",toLatitude)
  console.log("toLongitude",toLongitude)




  const [vehicleData, setVehicleData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(URL,{
    "fromLongitude": fromLongitude,
    "fromLatitude": fromLatitude,
    "toLongitude": toLongitude,
    "toLatitude": toLatitude
});
        console.log("responseFromServieClass", response);
        setVehicleData(response.data.items[0].vehicles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const [selectedVehicle, setSelectedVehicle] = useState({});
  const [isIcon, setIsIcon] = useState(null);
  const handleVehicleClick = (vehicle) => {
    setSelectedVehicle(selectedVehicle === vehicle ? null : vehicle);
    setIsIcon(isIcon === vehicle ? null : vehicle);
  };
  const handleSubmit = () => {
    handleNextButon();
    localStorage.setItem("selected vehicle", JSON.stringify(selectedVehicle));
  };
  return (
    <div className="serviceclass-container">
      <section className="container">
        {/*above code is common in pickup component  */}
        <section className="row">
          {vehicleData && vehicleData.length > 0 ? (
            vehicleData.map((vehicle) => {
              return (
                <div key={vehicle._id} className="col-md-6">
                  <div className="business-class-container">
                    <div
                      className={`car-container ${
                        selectedVehicle === vehicle ? "selected" : ""
                      }`}
                      onClick={() => handleVehicleClick(vehicle)}
                    >
                      <div
                        className={`displayIcon ${
                          selectedVehicle === vehicle ? "displayIconShow" : ""
                        }`}
                      >
                        <img src={selectedIcon} alt="not found" />
                      </div>
                      <div>
                        <img src={car1} alt="not found" />
                      </div>
                      <p>Business class</p>
                      <p>{vehicle.brand}</p>
                      <div className="business-class-icon-row">
                        <div>
                          <img src={family} alt="not found" />
                          <span>{vehicle.capacity}</span>
                        </div>
                        <div>
                          <img src={bag} alt="not found" />
                          <span>{vehicle.maxLaggauge}</span>
                        </div>
                      </div>
                      <p>{vehicle.vehicleCharges} USD</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p>No vehicle available at this moment</p>
            </div>
          )}
        </section>
        <section className="row">
          <div className="col-md-12">
            <div className="all-class-include-container">
              <div className="all-class-include font-inter">
                <p>All classes include:</p>
                <hr style={{ color: "#D9D9D9" }} />
                <ul>
                  <li>Free cancellation up until 1 hour before pickup</li>
                  <li>Free 15 minutes of wait time</li>
                  <li>Meet & Greet</li>
                  <li>Complimentary bottle of water</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="row">
          <div className="col-md-12">
            <div className="please-note-container">
              <div className="please-note-include font-inter">
                <p>Please note:</p>
                <hr style={{ color: "#D9D9D9" }} />
                <ul>
                  <li>
                    Guest/luggage capacities must be abided by for safety
                    reasons. If you are unsure, select a larger class as
                    chauffeurs may turn down service when they are exceeded.
                  </li>
                  <li>
                    The vehicle images above are examples. You may get a
                    different vehicle of similar quality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="row  mb-5 pb-5">
          <div className="col-md-3 continue-btn-container">
            <button className="continue-btn" onClick={handleSubmit}>
              Continue
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};
export default ServiceClass;
