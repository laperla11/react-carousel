import React from 'react';

const Image = ({ src, id }) => {
  return (
    <div key={id}>
      <h1 className='center'>Ebru, Turkish art of paper marbling</h1>
      <div className='image-container'>
        {<img src={src} alt='Ebru photo' />}
      </div>
    </div>
  );
};

export default Image;
