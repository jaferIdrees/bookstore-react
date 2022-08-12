import { Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'BooksList',
  },
  {
    id: 2,
    path: '/categories',
    text: 'Categories',
  },
];
function Navbar() {
  return (
    <div className="navbarContainer">
      <nav>
        <h1 className="mainTitle">Bookstore CMS</h1>
        <ul className="navBar">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
