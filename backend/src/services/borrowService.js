const borrowModel = require('../models/borrowModel');
const bookModel = require('../models/bookModel');

exports.getAllBorrows = async () => {
    const databaseRows = await borrowModel.getAllBorrowsFromDb();
    return databaseRows;
};

exports.borrowBook = async (bookId, readerId) => {
    const borrow = await borrowModel.create(bookId, readerId);
    await bookModel.updateBorrowStatus(bookId, 1); 
    return borrow;
};

exports.returnBook = async (bookId, readerId) => {
    const updatedBorrow = await borrowModel.markAsReturned(bookId, readerId);
    await bookModel.updateBorrowStatus(bookId, 0);
    return updatedBorrow;
};