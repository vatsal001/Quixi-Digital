import React from "react";
import AllRoute from "../router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cursor from "../../components/Cursor/Cursor";
import WhatsAppChatButton from "../../components/ProjectSection/WhatsappChat";

const App = () => {
  return (
    <div className="App" id="scroll">
      <AllRoute />
      <ToastContainer />
      <Cursor />
      <WhatsAppChatButton />
    </div>
  );
};

export default App;
