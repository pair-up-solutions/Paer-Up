import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logoImg from '../assets/logoImg.png';

const Logo = () => {
  return (
    <div className="card" style={{ width: '12.5rem' }}>
      <img src={`${logoImg}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text"> PaerdUp</p>
      </div>
    </div>
  );
};

export default Logo;
