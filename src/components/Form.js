import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { add } from '../redux/books/Books';

const FormBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categoryState, setCategory] = useState('');

  const UpdateStore = () => {
    const newBook = {
      item_id: uuid4(),
      title,
      author,
      category: categoryState,
    };
    dispatch(add(newBook));
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
        <input type="text" placeholder="Book Title .." value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" className="book-input" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <select type="text" onChange={(e) => setCategory(e.target.value)} required>
          <option value="category">Category</option>
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
