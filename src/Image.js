import React from "react";

const Image = props => {
  return (
    <div className="image-container">
      <img src={props.imgSrc} />
    </div>
  );
};

export default Image;
