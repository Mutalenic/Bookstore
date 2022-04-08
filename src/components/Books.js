import React from "react";
const BookList = () => (
    <div>
      <ul className="Bookslist">
        <li>
          <span>Book 1 </span>
          <span>Author 1 </span>
          <span>6% </span>
          <button type="button">Remove</button>
        </li>
        <li>
          <span>Book 2 </span>
          <span>Author 2 </span>
          <span>20% </span>
          <button type="button">Remove</button>
        </li>
        <li>
          <span>Book 3 </span>
          <span>Author 3 </span>
          <span>40% </span>
          <button type="button">Remove</button>
        </li>
      </ul>
    </div>
  );
  
  export default BookList;
  