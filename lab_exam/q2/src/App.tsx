import { useState } from "react";
import { books } from "./types";
import BookRow from "./BookRow";
import "./App.css";

function App() {
  const [borrowedIds, setBorrowedIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setBorrowedIds((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="app">
      <h1>Library Book Tracker</h1>
      <p>
        {borrowedIds.length} of {books.length} books borrowed
      </p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookRow
              key={book.id}
              book={book}
              borrowed={borrowedIds.includes(book.id)}
              onToggle={handleToggle}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;