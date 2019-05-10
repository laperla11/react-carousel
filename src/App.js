import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import Image from "./Image.js";
import Button from "./Button.js";
import image1 from "./images/ebru1.jpg";
import image2 from "./images/ebru2.jpg";
import image3 from "./images/ebru3.jpg";
import image4 from "./images/ebru4.jpg";
import image5 from "./images/ebru5.jpg";
import image6 from "./images/ebru6.jpg";
import image7 from "./images/ebru7.jpg";
import image8 from "./images/ebru8.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSources: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8
      ],
      index: 0,
      speed: 2000
    };
  }
  componentDidMount() {
    this.getAutoForward();
  }

  getBackwards = () => {
    this.setState(prevState => {
      return { index: prevState.index - 1 };
    });
  };

  getAutoBackwards = () => {
    clearInterval(this.autoForward);
    this.autoBackwards = setInterval(this.getBackwards, this.state.speed);
  };

  getForward = () => {
    this.setState(prevState => {
      return { index: prevState.index + 1 };
    });
  };

  getAutoForward = () => {
    clearInterval(this.autoBackwards);
    this.autoForward = setInterval(this.getForward, this.state.speed);
  };

  getStop = () => {
    clearInterval(this.autoForward);
    clearInterval(this.autoBackwards);
  };

  render() {
    const { imageSources, index } = this.state;
    const btnContents = [
      {
        content: "Auto Back",
        onClick: this.getAutoBackwards
      },
      {
        content: "Back",
        onClick: this.getBackwards
      },
      { content: "Stop", onClick: this.getStop },
      {
        content: "Forward",
        onClick: this.getForward
      },
      {
        content: "Auto Forward",
        onClick: this.getAutoForward
      }
    ];
    return (
      <div className="xs-col-12 sm-col-10 container">
        <div style={{ position: "relative" }}>
          <Image
            imgSrc={
              imageSources[
                index >= 0
                  ? index % imageSources.length
                  : imageSources.length - 1 + (index % imageSources.length)
              ]
            }
          />

          <p style={paraStyle}>
            {(index >= 0
              ? index % imageSources.length
              : imageSources.length - 1 + (index % imageSources.length)) +
              1}{" "}
            / {imageSources.length}
          </p>
        </div>
        <div className="center" style={{ marginTop: "15px" }}>
          {btnContents.map(button => {
            return <Button content={button.content} onClick={button.onClick} />;
          })}{" "}
        </div>
      </div>
    );
  }
}

const paraStyle = {
  position: "absolute",
  bottom: "10px",
  left: "10px",
  color: "white",
  backgroundColor: "black",
  padding: "5px",
  borderRadius: "5px",
  display: "inline",
  margin: "0px"
};
