import { Link } from 'react-router-dom';

const NavLink = ({ to, label }) => (
  <Link to={to} style={{ fontWeight: 'bold', padding: '0 5px' }}>
    {label}
  </Link>
);

export default NavLink;
