import React from 'react';
import Layout from './components/Layout';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

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
