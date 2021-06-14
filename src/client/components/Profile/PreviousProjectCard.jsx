import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const PreviousProjectCard = (props) => {
  const githubLinks = props.userData.arrOfRepos.map((repo, idx) => {
    return (
      <a key={idx} href={repo.url} className="btn btn-primary">
        {repo.name}
      </a>
    );
  });
  return (
    <div>
      <div className="card">
        <h5 className="card-header">Previous Projects</h5>
        <div className="card-body">
          <p className="card-text">{githubLinks}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default PreviousProjectCard;
