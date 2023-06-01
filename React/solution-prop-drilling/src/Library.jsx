import { useState } from "react";
import { collection } from "./collection";
import { Books } from "./Books";

export default () => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = id => {
    const newBooks = books.map(book => {
      if (book.id === id) {
        book.available = false;
      }
      return book;
    });
    setBooks(newBooks);
  };

  const returnBook = id => {
    const newBooks = books.map(book => {
      if (book.id === id) {
        book.available = true;
      }
      return book;
    });
    setBooks(newBooks);
  };

  return (
    <div className="App">
      <h1>Library</h1>
      <Books books={books} borrowBook={borrowBook} returnBook={returnBook} />
    </div>
  );
};
