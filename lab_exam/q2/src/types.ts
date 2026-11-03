export interface Book {
  id: number;
  title: string;
  author: string;
}

export const books: Book[] = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { id: 3, title: "Don't Make Me Think", author: "Steve Krug" },
];