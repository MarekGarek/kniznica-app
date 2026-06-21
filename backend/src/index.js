const express = require('express');
const cors = require('cors');
const { connectDatabase } = require('../config/database');

const bookRoutes = require('./routes/bookRoutes');
const readerRoutes = require('./routes/readerRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/readers', readerRoutes);
app.use('/api/borrows', borrowRoutes);

async function bootstrap() {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`-> Enterprise Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Bootstrap failed:', error);
    }
}

bootstrap();