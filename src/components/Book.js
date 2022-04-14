import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

export default function Book({ book }) {
  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="bookCard" id={book.id}>
      <div className="bookInfo">
        <p className="genre">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={deleteBook}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div>
          <div>chart</div>
          <p>percentage</p>
        </div>
        <div>
          <p>{book.status}</p>
          <p>{book.currentChapter}</p>
          <p>{book.chapterNumber}</p>
          <button type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};
