import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Aboutme() {
  return (
    <div className="styleaboutme">
      <p>Do you have any questions or just want to say Hello?</p>
      you can reach me!
      <p>Email:cesar4a6z@gmail.com</p>
      <ul className="stylelinks">
        <a href="https://www.linkedin.com/in/cesar-valencia-aguilar/" target="_blank" rel="noreferrer">
          <li>
            <GrLinkedin />
          </li>
        </a>
        <a href="https://twitter.com/cvalenciaguilar" target="_blank" rel="noreferrer">
          <li>
            <BsTwitter />
          </li>
        </a>
      </ul>
      <div className="stylebuttonreturn">
        <Link className="stylebuttonreturn" to="/"><button className="stylebuttonback" type="button">return</button></Link>
      </div>

    </div>
  );
}

export default Aboutme;
