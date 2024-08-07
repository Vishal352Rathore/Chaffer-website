import { useEffect, useRef, useState} from "react";
import "../CssStyle/StepBar.css";
import { useSelector, useDispatch } from "react-redux";
import { nextStage1, previousStage1 ,intialStage1 } from "../Actions/actions.js";
import { useLocation } from "react-router-dom";
function MultiStepForm({ stepsConfig, actionIndex ,topRef }) {

  const [distance, setDistance] = useState(0);

  const location = useLocation();
  console.log("location",location);
  const { from } = location.state === null ? null : location.state  ;

  const bookingStageFromRedux = useSelector((state) => state.bookingStageReducer.bookingStage1) 
  console.log("bookingStageFromRedux", bookingStageFromRedux);  

  const bookingStage = from === null ? actionIndex : bookingStageFromRedux ;
  const dispatch = useDispatch();

  console.log("bookingStage", bookingStage);

  const pickUpLocation = localStorage.getItem("pickUpLocation");
  const dropLocation = localStorage.getItem("dropLocation");
  const date = localStorage.getItem("date");
  const time = localStorage.getItem("time");

  const dateObject = new Date(date);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = dateObject.getDate();
  const monthIndex = dateObject.getMonth();
  const year = dateObject.getFullYear();
  const formattedDate = ` ${monthNames[monthIndex]} ${day}, ${year}`;

  let formattedTime = ""; // Declare formattedTime variable outside of the if block

  if (time !== null) {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    
    formattedTime = `${hours12}:${minutes < 10 ? "0" : ""}${minutes} ${period}`; // Assign value to formattedTime
    console.log(formattedTime);
  } else {
    console.log("Error: time is null");
  }

  const [currentStep, setCurrentStep] = useState(bookingStage);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentStep]);

  useEffect(() => {
    calculateDistance();
   }, [])


  useEffect(() => {
    if (stepsConfig && stepsConfig.length > 0) {
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2,
      });
    }
  }, [stepRef, stepsConfig]);

  if (!stepsConfig || !stepsConfig.length) {
    return <></>;
  }

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === stepsConfig.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        if(bookingStageFromRedux === 3){ 
          dispatch(intialStage1())
          console.log("FromStage3")
        }else{
          dispatch(nextStage1());
          console.log("FromNextStage")
        }
        return prevStep + 1;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 1) {
        return prevStep;
      } else {
        dispatch(previousStage1());
        setIsComplete(false);
        return prevStep - 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const calculateDistance = async () => {

    const apiKey  = "AIzaSyCZ0UycRv9Fy9PMDBY-uoU_SkXZGnmjP18";

    const [pickUpLat, pickUpLon] =   localStorage.getItem("pickUpLocationCoordinates").split(',');
    const [dropLat, dropLon] =   localStorage.getItem("dropLocationCoordinates").split(',');

    console.log("pickUpLat",pickUpLat);
    console.log("pickUpLon",pickUpLon);
    console.log("dropLat",dropLat);
    console.log("dropLon",dropLon);


    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${pickUpLat},${pickUpLon}&destinations=${dropLat},${dropLon}&key=${apiKey}`;
       
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK') {
        const distanceText = data.rows[0].elements[0].distance.text;
        setDistance(distanceText);
      } else {
        console.error('Failed to fetch distance:', data.error_message);
      }
    } catch (error) {
      console.error('Error fetching distance:', error);
    }
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <div className="step-bar">
      <div  className="">
        <div className="stepper">
          {stepsConfig.map((step, index) => {
            return (
              <div
                key={step.name}
                ref={(el) => (stepRef.current[index] = el)}
                className={`step ${
                  currentStep > index + 1 || isComplete ? "complete" : ""
                } ${currentStep === index + 1 ? "active" : ""} `}
              >
                <div className="step-number">
                  {/* {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )} */}
                </div>
                <div className="step-name">{step.name}</div>
              </div>
            );
          })}

          <div
            className="progress-bar"
            style={{
              width: `calc(100% - ${
                margins.marginLeft + margins.marginRight
              }px)`,
              marginLeft: margins.marginLeft,
              marginRight: margins.marginRight,
            }}
          >
            <div
              className="progress"
              style={{ width: `${calculateProgressBarWidth()}%` }}
            ></div>
          </div>
        </div>

        <section className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mst">
              <p>
               Sun, {formattedDate} at {formattedTime} (MST)
              </p>
              <p>
                <span>From:</span> {pickUpLocation} <span>To: </span>
                {dropLocation}
              </p>
              <p>Estimated arrival at {formattedTime} (MST) {distance} </p>
            </div>
          </div>
        </div>
        </section>  


        <ActiveComponent
          handleNextButon={handleNext}
          handlePreviousButton={handlePrevious}
          from={from}
        />

       
      </div>
    </div>
  );
}

export default MultiStepForm;
