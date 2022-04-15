import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/Books';
import Book from './Book';
import FormBook from './Form';

export default function Books() {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <FormBook />
    </>
  );
}
