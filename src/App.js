import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import Navbar from './components/Navbar.js';
import Books from './components/Books.js';
import Categories from './components/Categories.js';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
