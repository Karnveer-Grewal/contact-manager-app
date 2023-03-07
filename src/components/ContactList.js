import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
  return (
    <Link to='/add'>
      <button>Add Contact</button>
    </Link>
  );
};

export default ContactList;
