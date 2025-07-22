export const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearUserFromStorage = () => {
  localStorage.removeItem('user');
};