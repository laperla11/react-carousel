import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import Image from "./Image.js";
import Button from "./Button.js";

const imageSrc1 =
  "https://media.istockphoto.com/photos/ebru-art-traditional-turkish-ebru-technique-picture-id623964728?s=2048x2048";
const imageSrc2 =
  "https://media.istockphoto.com/photos/-picture-id1147296113?s=2048x2048";
const imageSrc3 =
  "https://media.istockphoto.com/photos/ebru-art-traditional-turkish-ebru-technique-picture-id623964554?s=2048x2048";
const imageSrc4 =
  "https://media.istockphoto.com/photos/marbling-picture-id157962221?s=2048x2048";
const imageSrc5 =
  "https://media.istockphoto.com/photos/ebru-picture-id162437424?s=2048x2048";
const imageSrc6 =
  "https://media.istockphoto.com/photos/ebru-art-traditional-turkish-ebru-technique-picture-id623964668?s=2048x2048";
const imageSrc7 =
  "https://media.istockphoto.com/photos/process-of-creating-drawing-in-ebru-technique-painting-on-the-water-picture-id995247330?s=2048x2048";
const imageSrc8 =
  "https://media.istockphoto.com/photos/ebru-art-traditional-turkish-ebru-technique-picture-id501911650?s=2048x2048";

const imageSources = [
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
  imageSrc6,
  imageSrc7,
  imageSrc8
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      speed: 3000
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
    const { index } = this.state;
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
