const bookModel = require('../models/bookModel');

exports.getBooksList = () => bookModel.findAll();

exports.addNewBook = (title, author) => bookModel.create(title, author);

exports.updateBookInfo = (id, title, author) => bookModel.update(id, title, author);