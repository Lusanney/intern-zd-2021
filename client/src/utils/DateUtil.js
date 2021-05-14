/**
 * Format the date into readable format
 * @param {string} dateString
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString();
};

export default formatDate;
