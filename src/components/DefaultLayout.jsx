import React, { useRef ,useEffect } from "react";
import Header from "./Header";
import Footer from "../Shared/Footer";
import { Outlet ,useLocation} from "react-router-dom";

const DefaultLayout = () => {
  const topRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
   if (topRef.current) {
    const topPosition = topRef.current.offsetTop - 95; // Adjusted for margin-top
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  }
  }, [location]);

  return (
    <div>
      <div  className="nav-bar-position"> 
        <Header />
      </div>{" "}
      
      <div ref={topRef} className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
