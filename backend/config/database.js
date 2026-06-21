const mysql = require('mysql2/promise');
require('dotenv').config();

let poolInstance;

async function connectDatabase() {
    try {
        poolInstance = mysql.createPool({
            host: process.env.DB_HOST,       
            port: parseInt(process.env.DB_PORT, 10),
            user: process.env.DB_USER,            
            password: process.env.DB_PASSWORD,       
            database: process.env.DB_NAME,  
            waitForConnections: true,
            connectionLimit: 10,     
            queueLimit: 0
        });

        const connection = await poolInstance.getConnection();
        console.log('-> MySQL Database connected successfully via Pool.');
        connection.release();

        return poolInstance;
    } catch (error) {
        console.error('❌ Failed to connect to MySQL Database:', error.message);
        throw error;
    }
}

function getDb() {
    if (!poolInstance) {
        throw new Error('Database not connected. Call connectDatabase first.');
    }
    return poolInstance;
}

module.exports = { connectDatabase, getDb };