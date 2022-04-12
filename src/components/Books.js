import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import FormBook from './Form';

export default function Books() {
  const books = useSelector((state) => state.bookReducer);

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <FormBook />
    </>
  );
}
