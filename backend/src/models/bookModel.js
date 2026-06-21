const { getDb } = require('../../config/database');

exports.findAll = async () => {
    const db = getDb();
    const query = `
        SELECT 
            b.id,
            b.title,
            b.author,
            b.is_borrowed AS isBorrowed,
            r.first_name AS borrowedByFirstName,
            r.last_name AS borrowedByLastName,
            r.id_card AS borrowedByIdCard,
            DATE_FORMAT(br.borrowed_at, '%Y-%m-%d') AS borrowedAt
        FROM books b
        LEFT JOIN borrows br ON b.id = br.book_id AND br.returned_at IS NULL
        LEFT JOIN readers r ON br.reader_id = r.id_card
    `;
    
    const [rows] = await db.query(query);
    return rows;
};

exports.create = async (title, author) => {
    const db = getDb();
    
    const [result] = await db.query(
        'INSERT INTO books (title, author, is_borrowed) VALUES (?, ?, 0)', 
        [title, author]
    );
    
    return { 
        id: result.insertId,
        title, 
        author, 
        isBorrowed: 0 
    };
};

exports.update = async (id, title, author) => {
    const db = getDb();
    
    await db.query(
        'UPDATE books SET title = ?, author = ? WHERE id = ?', 
        [title, author, id]
    );
    
    return { id: Number(id), title, author };
};

exports.updateBorrowStatus = async (id, isBorrowed) => {
    const db = getDb();
    
    await db.query(
        'UPDATE books SET is_borrowed = ? WHERE id = ?', 
        [isBorrowed, id]
    );
};