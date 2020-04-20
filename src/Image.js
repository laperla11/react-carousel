import React from 'react';

const Image = ({ src, i, id }) => {
  return (
    <div key={id} style={{ display: id === i ? 'block' : 'none' }}>
      <h1 className='center'>Ebru, Turkish art of paper marbling</h1>
      <div className='image-container'>
        {<img src={src} alt='Ebru photo' />}
      </div>
    </div>
  );
};

export default Image;
