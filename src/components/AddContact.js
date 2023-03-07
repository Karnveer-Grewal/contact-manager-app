import React from 'react';

const AddContact = () => {
  return (
    <main className='add-container'>
      <h2>Add Contact</h2>
      <form className='contact-form'>
        <div>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' name='firstName' />
        </div>
        <br />
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' name='lastName' />
        </div>
        <br />
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' />
        </div>
        <button>Add Contact</button>
      </form>
    </main>
  );
};

export default AddContact;
