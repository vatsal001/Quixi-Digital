import React, { useEffect, useRef } from "react";

const wordsTop = [
  "Communicate",
  "Content",
  "Communicate",
  "Content",
  "Communicate",
  "Content",
];
const wordsBottom = [
  "Connect",
  "Community",
  "Connect",
  "Community",
  "Connect",
  "Community",
];

const MarqueeSlider = ({ items, speed = 50 }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let scroll = 0;

    const interval = setInterval(() => {
      if (!wrapper) return;
      scroll -= 1;
      if (Math.abs(scroll) >= wrapper.scrollWidth / 2) {
        scroll = 0;
      }
      wrapper.style.transform = `translateX(${scroll}px)`;
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  const containerStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    background: "#f9f9f9",
    padding: "10px 0",
  };

  const wrapperStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    willChange: "transform",
  };

  const itemStyle = {
    display: "inline-block",
    padding: "0 40px",
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <div ref={wrapperRef} style={wrapperStyle}>
        {[...items, ...items].map((word, idx) => (
          <span key={idx} style={itemStyle}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

const Marquee = () => (
  <>
    <MarqueeSlider items={wordsTop} speed={30} />
    <MarqueeSlider items={wordsBottom} speed={40} />
  </>
);

export default Marquee;
