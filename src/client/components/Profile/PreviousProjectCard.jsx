import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const PreviousProjectCard = (props) => {
  const githubLinks = props.arrOfRepos.map((repo, idx) => {
    return (
      <a key={idx} href={repo.url} className="btn btn-success">
        {props.name}
      </a>
    );
  });
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{githubLinks}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviousProjectCard;
