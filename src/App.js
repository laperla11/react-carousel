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
const imageSrc9 =
  "https://live.staticflickr.com/7621/26840222086_7e45bdf193_b.jpg";
const imageSrc10 =
  "https://live.staticflickr.com/7484/26780827862_18a28aabbf_h.jpg";
const imageSrc11 =
  "https://live.staticflickr.com/7202/26270024163_401631bf08_h.jpg";
const imageSrc12 =
  "https://live.staticflickr.com/7295/26840215746_8e85b88e9d_h.jpg";
let imageSrc13 =
  "https://live.staticflickr.com/7198/26270039683_8a53ad0fa4_h.jpg";
const imageSrc14 =
  "https://live.staticflickr.com/7791/26601190840_3153a8a876_h.jpg";
const imageSources = [
  imageSrc1,
  imageSrc2,
  imageSrc3,
  imageSrc4,
  imageSrc5,
  imageSrc6,
  imageSrc7,
  imageSrc8,
  imageSrc9,
  imageSrc10,
  imageSrc11,
  imageSrc12,
  imageSrc13,
  imageSrc14
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      speed: 2000
    };
  }
  componentDidMount() {
    this.getAutoForward();
  }

  componentWillUnmount() {
    clearInterval(this.autoForward);
    clearInterval(this.autoBackwards);
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
    const newIndex =
      index >= 0
        ? index % imageSources.length
        : imageSources.length - 1 + (index % imageSources.length);

    return (
      <div className="xs-col-12 sm-col-10 container">
        <div style={{ position: "relative" }}>
          <Image imgSrc={imageSources[newIndex]} />
          <p style={paraStyle}>
            {newIndex + 1} / {imageSources.length}
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
