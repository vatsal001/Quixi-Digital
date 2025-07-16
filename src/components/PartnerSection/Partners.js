import React, { Fragment } from "react";
import NavbarS2 from "../NavbarS2/NavbarS2";
import Footer from "../footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/tasty. (1).png";
import pimg1 from "../../images/partners/Untitled design (23).png";
import pimg2 from "../../images/partners/Untitled design (24).png";
import pimg3 from "../../images/partners/Untitled design (25).png";
import pimg4 from "../../images/partners/Untitled design (26).png";
import pimg5 from "../../images/partners/Untitled design (27).png";
import pimg6 from "../../images/partners/Untitled design (28).png";
import pimg7 from "../../images/1709475068_ub-1400x783.png";
import pimg8 from "../../images/Untitled design (21) (1).png";
import pimg9 from "../../images/WhatsApp Image 2025-06-13 at 6.43.31 PM.jpeg";
import pimg10 from "../../images/WhatsApp Image 2025-06-26 at 5.52.15 PM.jpeg";

const clientLogos = [
  { id: 1, name: "Client 1", logo: pimg1 },
  { id: 2, name: "Client 2", logo: pimg2 },
  { id: 3, name: "Client 3", logo: pimg3 },
  { id: 4, name: "Client 4", logo: pimg4 },
  { id: 5, name: "Client 5", logo: pimg5 },
  { id: 6, name: "Client 6", logo: pimg6 },
  { id: 7, name: "Client 7", logo: pimg7 },
  { id: 8, name: "Client 8", logo: pimg8 },
  { id: 9, name: "Client 9", logo: pimg9 },
  { id: 10, name: "Client 10", logo: pimg10 },

];

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem",
    fontFamily: "sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "2.5rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "2rem",
    alignItems: "center",
    justifyItems: "center",
  },
  logoBox: {
    width: "100%",
    maxWidth: "150px",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease",
  },
  logoImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
};

const ClientsPage = () => {
  return (
    <Fragment>
      <NavbarS2 hclass={"wpo-site-header wpo-site-header-s4"} Logo={Logo} />
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Clients</h1>
        <div style={styles.grid}>
          {clientLogos.map((client) => (
            <div key={client.id} style={styles.logoBox}>
              <img
                src={client.logo}
                alt={client.name}
                title={client.name}
                style={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer hclass={"footer-section section-padding pb-0"} />
      <Scrollbar />
    </Fragment>
  );
};

export default ClientsPage;
