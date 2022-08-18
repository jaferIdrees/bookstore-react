import { Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BOOKS',
  },
  {
    id: 2,
    path: '/categories',
    text: 'CATEGORIES',
  },
];
function Navbar() {
  return (
    <div className="navbarContainer">
      <nav className="navbar">
        <h1 className="mainTitle">Bookstore CMS</h1>
        <ul className="navBarUl">
          {links.map((link) => (
            <li key={link.id} className={link.text}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
