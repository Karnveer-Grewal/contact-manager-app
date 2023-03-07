import React from 'react';
import { Link } from 'react-router-dom';
import defaultUserImg from '../images/default-user.png';

const ContactCard = (props) => {
  const { firstName, lastName, email } = props.contactInfo;

  return (
    <div className='contact--card'>
      <Link to={`/contacts/${props.id}`}>
        <img src={defaultUserImg} alt='user' className='contact--image' />
        <div className='contact--info'>
          <p className='contact--name'>{`${firstName} ${lastName}`}</p>
          <p className='contact--email'>{email}</p>
        </div>
      </Link>
      <div className='contact--buttons'>
        <button
          className='contact--delete'
          onClick={() => props.deleteContact(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
