import React, { useState } from 'react';

const AddContact = (props) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName === '' || formData.email === '') {
      alert('All fields are mandatory');
      return;
    }
    props.addContactHandler(formData);
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  return (
    <main className='add-container'>
      <h2>Add Contact</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            id='first-name'
            name='firstName'
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <br />
        <div>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            name='lastName'
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <br />
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <button>Add Contact</button>
      </form>
    </main>
  );
};

export default AddContact;
