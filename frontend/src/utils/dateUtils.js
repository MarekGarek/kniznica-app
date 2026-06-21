export const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const pureDate = dateStr.split('T')[0];
  return pureDate.split('-').reverse().join('.');
};