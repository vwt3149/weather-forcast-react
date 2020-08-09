export const setSearchStorage = (search) => {
  localStorage.setItem('search', search);
};

export const getSearchStorage = () => {
  return localStorage.getItem('search');
};

// export const deleteSearchStorage = () =>{
//     localStorage.clear()
// }
