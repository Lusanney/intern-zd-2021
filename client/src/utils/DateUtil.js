const formatDate = (dateString) => {
  const date = new Date(dateString);

  return date.toLocaleString();
};

export default formatDate;