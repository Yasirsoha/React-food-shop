import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <img src='/images/emptycart.jpg' alt='empty cart' />
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
