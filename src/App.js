import React, { Component } from 'react';
import './App.css';
import './grid.css';
import Image from './Image.js';
import Button from './Button.js';

import image1 from './assets/1-istockphoto-623964728-2048x2048.jpg';
import image2 from './assets/2-istockphoto-1147296113-2048x2048.jpg';
import image3 from './assets/3-istockphoto-623964554-2048x2048.jpg';
import image4 from './assets/4-istockphoto-157962221-2048x2048.jpg';
import image5 from './assets/5-istockphoto-162437424-2048x2048.jpg';
import image6 from './assets/6-istockphoto-623964668-2048x2048.jpg';
import image7 from './assets/7-istockphoto-995247330-2048x2048.jpg';
import image8 from './assets/8-istockphoto-501911650-2048x2048.jpg';
import image9 from './assets/9-26840222086_7e45bdf193_b.jpg';
import image10 from './assets/10-26780827862_18a28aabbf_h.jpg';
import image11 from './assets/11-26270024163_401631bf08_h.jpg';
import image12 from './assets/12-26840215746_8e85b88e9d_h.jpg';
import image13 from './assets/13-26270039683_8a53ad0fa4_h.jpg';
import image14 from './assets/14-26601190840_3153a8a876_h.jpg';

const imageSources = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      speed: 2500,
    };
    this.autoForwardPlay = null;
    this.autoBackwardPlay = null;
  }
  componentDidMount() {
    this.getAutoForward();
  }

  componentWillUnmount() {
    clearInterval(this.autoForwardPlay);
    clearInterval(this.autoBackwardPlay);
  }

  getBackwards = () => {
    this.setState((prevState) => {
      return { index: prevState.index - 1 };
    });
  };

  getAutoBackwards = () => {
    clearInterval(this.autoForwardPlay);
    this.autoBackwardPlay = setInterval(this.getBackwards, this.state.speed);
  };

  getForward = () => {
    this.setState((prevState) => {
      return { index: prevState.index + 1 };
    });
  };

  getAutoForward = () => {
    clearInterval(this.autoBackwardPlay);
    this.autoForwardPlay = setInterval(this.getForward, this.state.speed);
  };

  getStop = () => {
    clearInterval(this.autoForwardPlay);
    clearInterval(this.autoBackwardPlay);
  };

  render() {
    const { index } = this.state;
    const btnContents = [
      {
        content: 'Auto Back',
        onClick: this.getAutoBackwards,
      },
      {
        content: 'Back',
        onClick: this.getBackwards,
      },
      { content: 'Stop', onClick: this.getStop },
      {
        content: 'Forward',
        onClick: this.getForward,
      },
      {
        content: 'Auto Forward',
        onClick: this.getAutoForward,
      },
    ];
    const newIndex =
      index >= 0
        ? index % imageSources.length
        : imageSources.length - 1 + (index % imageSources.length);

    return (
      <div className='xs-col-12 sm-col-10 container'>
        <div style={{ position: 'relative' }}>
          <Image id={newIndex} src={imageSources[newIndex]} />
          <p style={paraStyle}>
            {newIndex + 1} / {imageSources.length}
          </p>
        </div>
        <div className='center' style={{ marginTop: '15px' }}>
          {btnContents.map((button) => {
            return <Button content={button.content} onClick={button.onClick} />;
          })}{' '}
        </div>
      </div>
    );
  }
}

const paraStyle = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  color: 'white',
  backgroundColor: 'black',
  padding: '5px',
  borderRadius: '5px',
  display: 'inline',
  margin: '0px',
};
// git push carousel - 1 master
