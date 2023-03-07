import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: prevContacts.length + 1, ...contact },
    ]);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );

    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    console.log(id);
    setContacts((prevContacts) =>
      prevContacts.filter((prevContact) => prevContact.id !== id)
    );
  };

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
