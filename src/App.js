import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetail from './components/ContactDetail';
import EditContact from './components/Edit Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  const editContactHandler = async (contact) => {
    try {
      const response = await axios.put(
        `http://localhost:3006/contacts/${contact.id}`,
        contact
      );
      setContacts((prevContacts) => {
        return prevContacts.map((prevContact) => {
          return prevContact.id === contact.id ? response.data : prevContact;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:3006/contacts/${id}`);
      setContacts((prevContacts) =>
        prevContacts.filter((prevContact) => prevContact.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const filteredContacts = contacts.filter((contact) => {
        return Object.values(contact)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });

      setSearchResults(filteredContacts);
    }
  }, [searchTerm]);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                deleteContact={deleteContact}
                searchTerm={searchTerm}
                searchHandler={searchHandler}
              />
            }
          />
          <Route
            path='/add'
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path='/edit/:id'
            element={<EditContact editContactHandler={editContactHandler} />}
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
