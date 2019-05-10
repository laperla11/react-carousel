import React from "react";

const Image = props => {
  return (
    <div>
      <h1 className="center">Ebru, Turkish art of paper marbling</h1>
      <div className="image-container">
        <img src={props.imgSrc} />
      </div>
    </div>
  );
};

export default Image;
