const bookService = require('../services/bookService');

/**
 * @returns {string|null}
 */
const validateBookInputs = (title, author) => {
    // (Missing / Invalid type)
    if (title === undefined || author === undefined) {
        return 'Missing required parameters: title and author are mandatory.';
    }
    if (typeof title !== 'string' || typeof author !== 'string') {
        return 'Invalid data types: title and author must be strings.';
    }

    const trimmedTitle = title.trim();
    const trimmedAuthor = author.trim();
    
    // empty
    if (!trimmedTitle || !trimmedAuthor) {
        return 'Invalid values: title and author cannot be empty or whitespace only.';
    }

    // limits
    if (trimmedTitle.length > 255) {
        return 'Invalid length: title exceeds maximum length of 255 characters.';
    }
    if (trimmedAuthor.length > 100) {
        return 'Invalid length: author exceeds maximum length of 100 characters.';
    }

    return null;
};

/**
 * @returns {boolean}
 */
const isValidId = (id) => {
    if (!id) return false;
    const num = Number(id);
    return !isNaN(num) && Number.isInteger(num) && num > 0;
};


// --- CONTROLLERY ---

exports.getBooks = async (req, res) => {
    try {
        const books = await bookService.getBooksList();
        res.json(books);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.createBook = async (req, res) => {
    const { title, author } = req.body;

    const validationError = validateBookInputs(title, author);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    try {
        const newBook = await bookService.addNewBook(title.trim(), author.trim());
        res.status(201).json(newBook);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;

    if (!isValidId(id)) {
        return res.status(400).json({ error: 'Invalid parameter: id must be a valid positive integer.' });
    }
    const validationError = validateBookInputs(title, author);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    try {
        const updatedBook = await bookService.updateBookInfo(Number(id), title.trim(), author.trim());
        res.json(updatedBook);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};