import { sampleBooks } from "../data/storage.js";
function createBook(id, title, author, category, year, copies) {
  return {
    id,
    title,
    author,
    category,
    year,
    totalCopies: copies,
    availableCopies: copies,
    timesLoaned: 0,
    rating: null,
  };
}

function isBookAvailable(book) {
  return book.availableCopies > 0;
}

function borrowBook(book) {
  if (book.availableCopies <= 0) {
    return book;
  }
  return {
    id:book.id,
    title:book.title,
    author:book.author,
    category:book.category,
    year:book.year,
    totalCopies: book.totalCopies,
    availableCopies: book.availableCopies-1,
    timesLoaned: book.timesLoaned,
    rating: book.rating,
  }
}

function returnBook(book) {
    return {
    id:book.id,
    title:book.title,
    author:book.author,
    category:book.category,
    year:book.year,
    totalCopies: book.totalCopies,
    availableCopies: book.availableCopies+1,
    timesLoaned: book.timesLoaned,
    rating: book.rating,
  }
}
function getBookInfo(book) {
  console.log(`id: ${book.id}, title: ${book.title},author: ${book.author}`);
}
