const readerService = require('../services/readerService');

const validateReaderInputs = (idCard, firstName, lastName, birthDate) => {
    if (!idCard || idCard.trim().length > 8) {
        return 'Číslo preukazu (id_card) je povinné a môže mať maximálne 8 znakov.';
    }
    if (!firstName || firstName.trim().length > 50) {
        return 'Meno je povinné a môže mať maximálne 50 znakov.';
    }
    if (!lastName || lastName.trim().length > 50) {
        return 'Priezvisko je povinné a môže mať maximálne 50 znakov.';
    }
    if (!birthDate) {
        return 'Dátum narodenia je povinný.';
    }
    return null;
};

// GET all readers
exports.getReaders = async (req, res) => {
    try {
        const readers = await readerService.getReadersList();
        res.json(readers);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

// POST create reader
exports.createReader = async (req, res) => {
    const { id_card, first_name, last_name, birth_date } = req.body;

    const validationError = validateReaderInputs(id_card, first_name, last_name, birth_date);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    try {
        const existingReader = await readerService.getReaderById(id_card.trim());
        if (existingReader) {
            return res.status(400).json({ error: 'Čitateľ s týmto číslom preukazu už existuje.' });
        }

        const newReader = await readerService.addNewReader(
            id_card.trim(), 
            first_name.trim(), 
            last_name.trim(), 
            birth_date
        );
        res.status(201).json(newReader);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

exports.updateReader = async (req, res) => {
    const { id } = req.params; 
    const { first_name, last_name, birth_date } = req.body;

    const validationError = validateReaderInputs(id, first_name, last_name, birth_date);
    if (validationError) {
        return res.status(400).json({ error: validationError });
    }

    try {
        const existingReader = await readerService.getReaderById(id.trim());
        if (!existingReader) {
            return res.status(404).json({ error: 'Čitateľ s týmto číslom preukazu nebol nájdený.' });
        }

        const updatedReader = await readerService.updateReader(
            id.trim(), 
            first_name.trim(), 
            last_name.trim(), 
            birth_date
        );
        res.json(updatedReader);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};