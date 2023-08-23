import { Link } from 'react-router-dom';
import Search from './components/Search';
import logo from './imgs/Logo.jpg';

function Navbar() {
  const back = [{
    id: 1,
    path: '/',
    text: '<',
  },
  ];
  const links = [
    {
      id: 0,
      path: '/About me',
      text: 'About me',
    },
    {
      id: 1,
      path: '/References',
      text: 'References',
    },
  ];
  return (
    <nav className="Navstyle">
      <div>
        {back.map((value) => (
          <div key={value.id}>
            <img className="stylelogo" src={logo} alt="" />
          </div>
        ))}
      </div>
      <Search />
      <ul className="styleMenu">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="linkstyles" to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
