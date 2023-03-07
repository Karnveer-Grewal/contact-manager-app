import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const { contacts, deleteContact } = props;
  console.log(contacts);

  const contactsElements = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contactInfo={contact}
      id={contact.id}
      deleteContact={deleteContact}
    />
  ));

  return (
    <main className='contact--list'>
      <Link to='/add'>Add Contact</Link>
      <div className='contact--container'>{contactsElements}</div>
    </main>
  );
};

export default ContactList;
