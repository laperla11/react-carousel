import React from "react";

const Image = props => {
  return (
    <div>
      <h1 className="center">Ebru</h1>
      <p className="center" style={paraStyle}>
        Turkish art of paper marbling
      </p>
      <div className="image-container">
        <img src={props.imgSrc} />
      </div>
    </div>
  );
};

const paraStyle = {
  fontSize: "20px"
};

export default Image;
