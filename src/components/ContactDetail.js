import React from 'react';
import { useParams, Link } from 'react-router-dom';
import defaultUserImg from '../images/default-user.png';

const ContactDetail = (props) => {
  const params = useParams();
  const { contacts } = props;

  const selectedContact = contacts.find(
    (contact) => contact.id === parseInt(params.id)
  );

  return (
    <div className='details--container'>
      <div className='details--card'>
        <img src={defaultUserImg} alt='user' />
        <h4>{`${selectedContact.firstName} ${selectedContact.lastName}`}</h4>
        <p>{selectedContact.email}</p>
      </div>{' '}
      <Link to='/'>Back to Contacts</Link>
    </div>
  );
};

export default ContactDetail;
