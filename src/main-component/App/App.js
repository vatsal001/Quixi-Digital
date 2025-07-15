import React from "react";
import AllRoute from "../router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from "../../components/Cursor/Cursor";



const App = () => {

  return (
    <div className="App" id="scroll">
      <AllRoute />
      <ToastContainer />
      <Cursor />
    </div>
  );
};

export default App;
