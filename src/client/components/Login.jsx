import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import githubLogo from '../assets/GitHub-Mark-Light-120px-plus.png';
import logoImg from '../assets/logoImg.png';

const Login = () => {
  return (
    <div className="container">
      <div
        className="loginContainer d-flex justify-content-center align-items-center"
        styles={{ backgroundImage: `url(${logoImg}`, height: '100vh' }}
      >
        <h1>PaerdUp</h1>
        <div className="card transparent-card" style={{ width: '18rem' }}>
          <img src={`${githubLogo}`} className="card-img-top transparent-card" alt="github logo" />
          <div className="card-body">
            <h5 className="card-title">Login/Signup With GitHub</h5>
            <p className="card-text">Login to find a paer programming partner at your level!</p>
            <Link to="/api/auth">
              <button className="btn btn-success">Github Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
