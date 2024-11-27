export const formatDateTime = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const period = hours < 12 ? '오전' : '오후';
  const hour12 = hours % 12 || 12;

  return `${year}. ${month}. ${day}. ${period} ${hour12}:${minutes}:${seconds}`;
}