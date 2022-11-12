import { Link } from 'react-router-dom';

const NavLink = ({ to, label }) => (
  <Link to={to} style={{ fontWeight: 'bold', padding: '0 5px', fontSize: '18px' }}>
    {label}
  </Link>
);

export default NavLink;
