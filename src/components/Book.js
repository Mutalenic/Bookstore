import React from 'react';
import Proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { del } from '../redux/books/Books';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (e, bookId) => {
    e.preventDefault();
    dispatch(del(bookId));
  };

  return (
    <div className="bookCard" id={book.id}>
      <div className="bookInfo">
        <p className="genre">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={(e) => deleteBook(e, book.item_id)}>Remove</button></li>
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
};

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};

export default Book;
