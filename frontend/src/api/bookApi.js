import axiosClient from './axiosClient';

export const fetchBooks = async () => {
  const response = await axiosClient.get('/books');
  return response.data;
};

export const createBook = async (newBookData) => {
  const response = await axiosClient.post('/books', newBookData);
  return response.data;
};

export const updateBook = async ({ id, ...updatedBookData }) => {
  const response = await axiosClient.put(`/books/${id}`, updatedBookData);
  return response.data;
};