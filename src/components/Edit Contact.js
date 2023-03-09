import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: Number(params.id),
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (formData.firstName === '' || formData.email === '') {
      alert('All fields are mandatory');
      return;
    }
    props.editContactHandler(formData);
    setFormData({
      id: Number(params.id),
      firstName: '',
      lastName: '',
      email: '',
    });
    navigate('/');
  };

  return (
    <main className='add-container'>
      <h2>Edit Contact</h2>
      <form className='contact-form' onSubmit={handleUpdate}>
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
        <button>Edit Contact</button>
      </form>
    </main>
  );
};

export default EditContact;
