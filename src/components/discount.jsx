import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Discount = () => {
  return (
    <div className='discount-container'>
        <div className='discount'>
          <p>Sign up and GET 20% OFF for your first order.</p>
          <Link className='discount-link'>Sign up now</Link>
        </div>
    </div>
  );
};

export default Discount;
