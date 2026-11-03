import type { Book } from "./types";

interface BookRowProps {
  book: Book;
  borrowed: boolean;
  onToggle: (id: number) => void;
}

function BookRow({ book, borrowed, onToggle }: BookRowProps) {
  return (
    <tr className={borrowed ? "borrowed" : ""}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button onClick={() => onToggle(book.id)}>
          {borrowed ? "Return" : "Borrow"}
        </button>
      </td>
    </tr>
  );
}

export default BookRow;