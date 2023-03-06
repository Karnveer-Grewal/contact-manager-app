import React from 'react';
import Layout from './components/Layout';
import ContactList from './components/ContactList';
import AddContact from './components/Add Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<ContactList />} />
          <Route path='/add' element={<AddContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
