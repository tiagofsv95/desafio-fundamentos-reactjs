const formatDate = (date: Date): string => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(newDate);
  // return '02/02/2020';
};
export default formatDate;
