import React from "react";

const Button = props => {
  return (
    <button className="xs-col-12" style={btnStyle} onClick={props.onClick}>
      {props.content}
    </button>
  );
};
const btnStyle = {
  background: "gray",
  fontSize: "20px",
  marginRight: "5px",
  color: "white",
  border: "1px solid white",
  minWidth: "80px",
  padding: "9px 5px",
  borderRadius: "3px",
  cursor: "pointer"
};

export default Button;
