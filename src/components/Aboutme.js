import React from 'react';
import { GrLinkedin } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoSkype } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Aboutme() {
  return (
    <div className="styleaboutme">
      <p>Do you have any questions or just want to say Hello?</p>
      you can reach me!
      <p>Email:cesar4a6z@gmail.com</p>
      <ul className="stylelinks">
        <li><GrLinkedin /></li>
        <li><BsTwitter /></li>
        <li><IoLogoSkype /></li>
      </ul>
      <div className="stylebuttonreturn">
        <Link className="stylebuttonreturn" to="/"><button className="stylebuttonback" type="button">return</button></Link>
      </div>

    </div>
  );
}

export default Aboutme;
