import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Homes } from './Components/Homes';
import BookDetails from './Components/BookDetails';
import NewPage1 from './NewPages/NewPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/details/:id" element={<BookDetails />} />
        <Route path="/newpage" element={<NewPage1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
