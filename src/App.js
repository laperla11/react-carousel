import React, { Component } from "react";
import "./App.css";
import "./grid.css";
import Image from "./Image.js";
import Button from "./Button.js";
import image1 from "./images/pawel-czerwinski-1538548-unsplash.jpg";
import image2 from "./images/pawel-czerwinski-1574306-unsplash.jpg";
import image3 from "./images/pawel-czerwinski-1574308-unsplash.jpg";
import image4 from "./images/pawel-czerwinski-1574309-unsplash.jpg";
import image5 from "./images/pawel-czerwinski-1574310-unsplash.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSources: [image1, image2, image3, image4, image5],
      index: 0
    };
  }

  getBackward = () => {
    this.setState(prevState => {
      return { index: prevState.index - 1 };
    });
  };

  getAutoBackward = () => {
    this.autoBackward = setInterval(this.getBackward, 2000);
  };

  getForward = () => {
    this.setState(prevState => {
      return { index: prevState.index + 1 };
    });
  };

  getAutoForward = () => {
    this.autoForward = setInterval(this.getForward, 2000);
  };

  getStop = () => {
    clearInterval(this.autoForward);
    clearInterval(this.autoBackward);
  };

  render() {
    const { imageSources, index } = this.state;
    const btnContents = [
      {
        content: "Auto Back",
        onClick: this.getAutoBackward
      },
      { content: "Back", onClick: this.getBackward },
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
        <Image
          imgSrc={
            imageSources[
              index >= 0
                ? index % imageSources.length
                : imageSources.length - 1 + (index % imageSources.length)
            ]
          }
        />
        {/* <p>{index}</p> */}
        <p className="center">
          {(index >= 0
            ? index % imageSources.length
            : imageSources.length - 1 + (index % imageSources.length)) + 1}{" "}
          / {imageSources.length}
        </p>
        <div className="center">
          {btnContents.map(button => {
            return <Button content={button.content} onClick={button.onClick} />;
          })}{" "}
        </div>
      </div>
    );
  }
}
