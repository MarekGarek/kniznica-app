const { getDb } = require('../../config/database');

exports.getAllBorrowsFromDb = async () => {
    const db = getDb();

    const query = `
        SELECT 
            b.id,
            b.borrowed_at AS borrowedAt,
            b.returned_at AS returnedAt,
            bk.title AS bookTitle,
            r.first_name AS firstName,
            r.last_name AS lastName
        FROM borrows b
        INNER JOIN books bk ON b.book_id = bk.id
        INNER JOIN readers r ON b.reader_id = r.id_card
        ORDER BY b.borrowed_at DESC;
    `;
    
    const [rows] = await db.query(query);
    return rows;
};

exports.create = async (bookId, readerId) => {
    const db = getDb();
    const today = new Date().toISOString().slice(0, 10);
    
    const [result] = await db.query(
        'INSERT INTO borrows (book_id, reader_id, borrowed_at, returned_at) VALUES (?, ?, ?, NULL)',
        [bookId, readerId, today]
    );
    
    return {
        id: result.insertId,
        book_id: bookId,
        reader_id: readerId,
        borrowed_at: today,
        returned_at: null
    };
};

exports.markAsReturned = async (bookId, readerId) => {
    const db = getDb();
    const today = new Date().toISOString().slice(0, 10);
    
    await db.query(
        'UPDATE borrows SET returned_at = ? WHERE book_id = ? AND reader_id = ? AND returned_at IS NULL',
        [today, bookId, readerId]
    );
    
    return { book_id: bookId, reader_id: readerId, returned_at: today };
};