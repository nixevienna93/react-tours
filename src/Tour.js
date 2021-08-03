import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readMore,setReadmore] = useState(false)

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{ name } 1231232131</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0,200)}...`}
        <button onClick={() => setReadmore(!readMore)}>{  readMore ? 'show less' : 'read more' }</button>
      </p>
      <button className='delete-btn' onClick={() => {
        removeTour(id)
      }}>
        Not interested
      </button>
    </footer>
  </article>;
};

export default Tour;
