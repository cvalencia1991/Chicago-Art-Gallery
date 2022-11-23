import { Link } from 'react-router-dom';
import Search from './components/Search';
import logo from './imgs/Logo_ARTCHICAGO.jpg';

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
        {back.map((backinfo) => (
          <a key={backinfo.id} href={backinfo.path} label="link logo"><img className="stylelogo" src={logo} alt="" /></a>
        ))}
      </div>
      <Search />
      <ul className="styleMenu">
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
