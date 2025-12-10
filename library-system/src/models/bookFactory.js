// src/models/bookFactory.js
// import { formatDate } from "../utils/helpers.js";
// import sampleBooks from '../data.js'
export function createBook(id, title, author, category, year, copies = 1) {
  return {
    id,
    title,
    author,
    category,
    year,
    totalCopies: copies,
    availableCopies: copies,
    timesLoaned: 0,
    rating: null // optional
  };
}

export const isBookAvailable = (book) => {
  return book.availableCopies > 0;
};

export const borrowBook = (book) => {
  // pure: return new object
  return {
    ...book,
    availableCopies: Math.max(0, book.availableCopies - 1),
    timesLoaned: book.timesLoaned + 1
  };
};

export const returnBook = (book) => {
  return {
    ...book,
    availableCopies: Math.min(book.totalCopies, book.availableCopies + 1)
  };
};

export const getBookInfo = (book) => {
  return `${book.title} by ${book.author} (${book.year}) — ${book.availableCopies}/${book.totalCopies} available`;
};


console.log(borrowBook(  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    year: 1997,
    totalCopies: 3,
    availableCopies: 2,
    timesLoaned: 15,
    rating: 4.8
  }));
