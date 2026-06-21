const { getDb } = require('../../config/database');

exports.findById = async (idCard) => {
    const db = getDb();
    const [rows] = await db.query('SELECT * FROM readers WHERE id_card = ?', [idCard]);
    return rows[0] || null;
};

exports.findAll = async () => {
    const db = getDb();
    const [rows] = await db.query('SELECT * FROM readers');
    return rows;
};

exports.create = async (idCard, firstName, lastName, birthDate) => {
    const db = getDb();
    
    await db.query(
        'INSERT INTO readers (id_card, first_name, last_name, birth_date) VALUES (?, ?, ?, ?)', 
        [idCard, firstName, lastName, birthDate]
    );
    
    return { id_card: idCard, first_name: firstName, last_name: lastName, birth_date: birthDate };
};

exports.update = async (idCard, firstName, lastName, birthDate) => {
    const db = getDb();
    
    await db.query(
        'UPDATE readers SET first_name = ?, last_name = ?, birth_date = ? WHERE id_card = ?', 
        [firstName, lastName, birthDate, idCard]
    );
    
    return { id_card: idCard, first_name: firstName, last_name: lastName, birth_date: birthDate };
};