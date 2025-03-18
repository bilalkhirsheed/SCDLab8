const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/Book.json');

// Load existing data or create an empty structure
function loadBooks() {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return { users: {} };
    }
}

// Save data to Book.json
function saveBooks(data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// User Authentication (Basic)
function authenticateUser(username) {
    const data = loadBooks();
    if (!data.users[username]) {
        data.users[username] = { books: [] };
        saveBooks(data);
    }
    return true;
}

// Lend a Book
function lendBook(username, title, author, borrower, dueDate, category) {
    const data = loadBooks();

    // Ensure user exists in the data
    if (!data.users[username]) {
        data.users[username] = { books: [] };
    }

    const newBook = { title, author, borrower, dueDate, category };
    data.users[username].books.push(newBook);  // Push book to user's book list

    saveBooks(data);  // Save updated data to file
    return newBook;
}

// View Borrowed Books with Optional Filters
function viewBorrowedBooks(username, filter = {}) {
    const data = loadBooks();

    if (!data.users[username]) return [];  // Return empty array if user doesn't exist

    const userBooks = data.users[username].books || [];
    return userBooks.filter(book => {
        return Object.keys(filter).every(key => book[key] === filter[key]);
    });
}

// Export Functions
module.exports = {
    lendBook,
    viewBorrowedBooks
};
