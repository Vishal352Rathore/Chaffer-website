// import "./App.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;


const SimplePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      {isOpen && (
        <div className="popup">
          <button onClick={togglePopup}>Close</button>
          <p>This is a simple popup!</p>
        </div>
      )}
    </div>
  );
};

export {SimplePopup};
