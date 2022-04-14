import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addBook } from '../redux/books/Books';

const FormBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const UpdateStore = () => {
    const newBook = {
      id: uuid4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  const formHandler = (e) => {
    e.preventDefault();

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <h2>ADD NEW BOOK</h2>
        <input type="text" placeholder="Book Title .." onChange={(e) => setTitle(e.target.value)} required />
        <input className="book-input" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <select id="books" value={category} name={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
        </select>
      </form>
      <button type="button" onClick={(e) => UpdateStore(e)}>ADD BOOK</button>
    </div>
  );
};

export default FormBook;
