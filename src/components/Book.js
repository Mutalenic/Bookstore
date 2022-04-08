import React from "react";
import PropTypes from 'prop-types';


const BookList = () => (
    <div>

const Book = ({ book }) => (
  <div className="books-container">
    <div>
      <div className="book-category">{book.category}</div>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>

    <div>
      <div className="book-complChart" />
      <div className="book-completed">
        {book.completed}
        %
      </div>
      <div className="book-complPref">completed</div>
    </div>
    <div>
      <div className="book-curChap">Current Chapter</div>
      <div className="book-curChap">
        Chapter
        {book.currentChapter}
        <span className="book-curChap-title">{book.currentChapterTitle}</span>
      </div>
    </div>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
};

Book.defaultProps = {
  book: {},
};


            <li>
            <span>Book 1 </span>
        <span>Author 1 </span>
        <span>50% </span>
        <button type="button">Remove</button>
            </li>
        </ul>
    </div>
)

export default Book;
