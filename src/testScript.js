// src/testScript.js

const { lendBook, viewBorrowedBooks } = require('./librarySystem');

const username = 'testUser';


const book1 = lendBook(username, '1984', 'George Orwell', 'Alice', '2025-04-15', 'Fiction');
const book2 = lendBook(username, 'A Brief History of Time', 'Stephen Hawking', 'Bob', '2025-04-20', 'Science');
const book3 = lendBook(username, 'Sapiens', 'Yuval Noah Harari', 'Charlie', '2025-04-25', 'History');

console.log('Books Lent Successfully:', { book1, book2, book3 });


const allBooks = viewBorrowedBooks(username);
console.log('All Borrowed Books:', allBooks);


const scienceBooks = viewBorrowedBooks(username, { category: 'Science' });
console.log('Filtered Books (Science):', scienceBooks);


const bobBooks = viewBorrowedBooks(username, { borrower: 'Bob' });
console.log('Filtered Books (Borrower: Bob):', bobBooks);
