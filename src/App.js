// import "./App.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Shared/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
     
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
