import axiosClient from './axiosClient';

export const fetchReaders = async () => {
  const response = await axiosClient.get('/readers');
  return response.data;
};

export const createReader = async (newReaderData) => {
  const response = await axiosClient.post('/readers', newReaderData);
  return response.data;
};

export const updateReader = async ({ id, ...readerData }) => {
  const response = await axiosClient.put(`/readers/${id}`, readerData);
  return response.data;
};