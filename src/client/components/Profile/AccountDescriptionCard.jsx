import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const AccountDescriptionCard = (props) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{props.userData.name}</h5>
          <p className="card-text">{props.userData.description}</p>
          <image href={props.UserData.profilePicUrl} className="card-img-top" />
        </div>
      </div>
    </div>
  );
};

export default AccountDescriptionCard;
