import React from 'react';
import { useNavigate } from 'react-router-dom';

function References() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="refInfo">
      <p>
        The Art Institute of Chicago is an encyclopedic art museum
        <a href="https://api.artic.edu/docs/#introduction" target="_blank" alt="Link Chicago Gallery institute" rel="noreferrer"> API </a>
        provides
        <br />
        JSON-formatted data as a REST-style service that allows
        <br />
        to explore and integrate the museum’s public data into
        their projects.
        <br />
        This API is the same tool that powers our website
        (opens new window), our mobile app (opens new window),
        <br />
        and many other technologies in the museum.
      </p>
      <div className="stylebuttonreturn">
        <button className="stylebuttonback" onClick={handleNavigate} type="button">return</button>
      </div>
    </div>
  );
}

export default References;
