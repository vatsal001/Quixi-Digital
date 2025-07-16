import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // For WhatsApp icon

const WhatsAppChatButton = () => {
  const phoneNumber = "+918849062703"; // Your WhatsApp number
  const message = "Hello! I want to know more about your services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <FaWhatsapp color="#fff" size={30} />
    </div>
  );
};

export default WhatsAppChatButton;
