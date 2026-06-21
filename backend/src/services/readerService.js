const readerModel = require('../models/readerModel');

exports.getReadersList = () => readerModel.findAll();

exports.getReaderById = (idCard) => readerModel.findById(idCard);

exports.addNewReader = (idCard, firstName, lastName, birthDate) => {
    return readerModel.create(idCard, firstName, lastName, birthDate);
};

exports.updateReader = (idCard, firstName, lastName, birthDate) => {
    return readerModel.update(idCard, firstName, lastName, birthDate);
};