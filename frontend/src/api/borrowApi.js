import axiosClient from './axiosClient';

export const getBorrowsList = async () => {
    const response = await axiosClient.get('/borrows');
    return response.data;
};

export const createBorrow = async ({ book_id, reader_id }) => {
    const response = await axiosClient.post('/borrows', { book_id, reader_id });
    return response.data;
};

export const returnBook = async ({ book_id, reader_id }) => {
    const response = await axiosClient.put('/borrows/return', { book_id, reader_id });
    return response.data;
};