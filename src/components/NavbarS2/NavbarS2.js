import React from "react";
import HeaderS2 from "../header/Header";

export default function NavbarS2(props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <div className={className}>
      <HeaderS2 hclass={props.hclass} Logo={props.Logo} />
    </div>
  );
}
