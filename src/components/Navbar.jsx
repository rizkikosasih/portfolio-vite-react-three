import { NavLink, useLocation } from 'react-router-dom';
import { listMenu } from '../constants';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className={listMenu.includes(location.pathname) ? 'header' : 'hidden'}>
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">RK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          About
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          Skills
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
