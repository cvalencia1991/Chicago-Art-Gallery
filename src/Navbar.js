import { Link } from 'react-router-dom';
import logo from './imgs/Logo_ARTCHICAGO.jpg';

function Navbar() {
  const links = [{
    id: 1,
    path: '/',
    text: 'Gallery',
  },
  {
    id: 2,
    path: '/Aboutme',
    text: 'Aboutme',
  },
  {
    id: 3,
    path: '/References',
    text: 'References',
  },
  ];
  return (
    <nav>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
