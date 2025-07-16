import React from "react";

import SectiobImg from "../../images/image-section.jpg";

const ImageSection = () => {
  return (
    <div
      className="section-image scroll-text-animation"
      data-animation="fade_from_bottom"
    >
      <img src={SectiobImg} alt="" />
    </div>
  );
};

export default ImageSection;
