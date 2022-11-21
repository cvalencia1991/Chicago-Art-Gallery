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
      path: '/Details',
      text: 'Details',
    },
    {
      id: 1,
      path: '/About me',
      text: 'About me',
    },
    {
      id: 2,
      path: '/References',
      text: 'References',
    },
  ];
  return (
    <nav className="Navstyle">
      <div className="backbutton">
        {back.map((backinfo) => (
          <Link key={backinfo.id} to={backinfo.path}>{backinfo.text}</Link>
        ))}
      </div>
      <div>
        {back.map((backinfo) => (
          <Link key={backinfo.id} to={backinfo.path}><img className="stylelogo" src={logo} alt="" /></Link>
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
