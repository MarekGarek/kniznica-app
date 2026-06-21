const borrowService = require('../services/borrowService');

const validateBorrowInputs = (book_id, reader_id) => {
    if (!book_id) return 'ID knihy je povinné.';
    if (isNaN(Number(book_id))) return 'ID knihy musí byť číslo.';
    if (!reader_id || typeof reader_id !== 'string') return 'Číslo karty/OP čitateľa je povinné.';
    if (reader_id.trim().length > 8) return 'Číslo karty/OP môže mať maximálne 8 znakov.';
    return null;
};

exports.getBorrowsList = async (req, res) => {
    try {
        const borrows = await borrowService.getAllBorrows();
        res.status(200).json(borrows);
    } catch (error) {
        console.error('Error in getBorrowsList controller:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createBorrow = async (req, res) => {
    const { book_id, reader_id } = req.body;

    const validationError = validateBorrowInputs(book_id, reader_id);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    try {
        const newBorrow = await borrowService.borrowBook(book_id, reader_id.trim());
        res.status(201).json(newBorrow);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.returnBook = async (req, res) => {
    const { book_id, reader_id } = req.body;

    const validationError = validateBorrowInputs(book_id, reader_id);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    try {
        const updatedBorrow = await borrowService.returnBook(book_id, reader_id.trim());
        res.status(200).json(updatedBorrow);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};