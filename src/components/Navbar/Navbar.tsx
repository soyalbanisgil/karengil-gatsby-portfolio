import { Link } from 'gatsby';
import React from 'react';
import { NavbarWrapper } from './styles';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to='/'>Home</Link>
      <Link to='/#services'>Services</Link>
      {/* <Link to='/blog'>Blog</Link> */}
      <Link to='/#contact'>Schedule your discovery call</Link>
    </NavbarWrapper>
  );
};

export default Navbar;
