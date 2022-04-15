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
          <li><button type="button" className="userinterationBtn">Comments</button></li>
          <li><button type="button" className="userinterationBtn" onClick={(e) => deleteBook(e, book.item_id)}>Remove</button></li>
          <li><button type="button" className="userinterationBtn">Edit</button></li>
        </ul>
      </div>
      <div className="progress">
        <div className="chart">
          <div className="ProgressBar">
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask half">
                  <div className="fill" />
                </div>
                <div className="inside-circle" />
              </div>
            </div>
          </div>
          <div className="percentages">
            <h2 className="percentComplete">48%</h2>
            <p className="status">Completed</p>
          </div>
        </div>
        <div className="rightSection">
          <p className="status">currentChapter</p>
          <p>chapterNumber</p>
          <button className="bookButton" type="button">Update progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: Proptypes.objectOf(Proptypes.string).isRequired,
};

export default Book;
