import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header--container'>
      <Link to='/'>Contact Manager</Link>
    </header>
  );
};

export default Header;
