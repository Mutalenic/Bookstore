import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import Navbar from './components/Navbar.js';
import Books from './components/Books.js';
import Categories from './components/Categories.js';

const books = [
  {
    id: 1,
    genre: 'genre',
    title: 'book title',
    author: 'author',
    status: 'complete',
    currentChapter: 'Current chapter',
    chapterNumber: 'Chapter #number',
  },
];

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books books={books} />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
