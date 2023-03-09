import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const { contacts, deleteContact } = props;

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
      <input
        type='text'
        placeholder='Search Contacts'
        className='contact--search'
        onChange={props.searchHandler}
        value={props.searchTerm}
      />
      <Link to='/add'>Add Contact</Link>
      <div className='contact--container'>
        {contactsElements.length > 0 ? (
          contactsElements
        ) : (
          <p>No Contacts Available</p>
        )}
      </div>
    </main>
  );
};

export default ContactList;
