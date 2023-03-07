import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const { contacts } = props;

  const contactsElements = contacts.map((contact, index) => (
    <ContactCard key={index} contactInfo={contact} />
  ));

  return (
    <main className='contact--list'>
      <Link to='/add'>Add Contact</Link>
      <div className='contact--container'>{contactsElements}</div>
    </main>
  );
};

export default ContactList;
