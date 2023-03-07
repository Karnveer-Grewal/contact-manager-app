import React from 'react';

const ContactCard = (props) => {
  const { firstName, lastName, email } = props.contactInfo;

  return (
    <div className='contact--card'>
      <div className='contact--info'>
        <p className='contact--name'>{`${firstName} ${lastName}`}</p>
        <p className='contact--email'>{email}</p>
      </div>
      <div className='contact--buttons'>
        <button>Delete Contact</button>
      </div>
    </div>
  );
};

export default ContactCard;
