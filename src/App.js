import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const response = await axios.post('http://localhost:3006/contacts', {
        id: contacts.length + 1,
        ...contact,
      });
      setContacts((prevContacts) => [...prevContacts, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3006/contacts/${id}`
      );
      setContacts((prevContacts) =>
        prevContacts.filter((prevContact) => prevContact.id !== id)
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await axios.get('http://localhost:3006/contacts');
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={
              <ContactList contacts={contacts} deleteContact={deleteContact} />
            }
          />
          <Route
            path='/add'
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path='/contacts/:id'
            element={<ContactDetail contacts={contacts} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
