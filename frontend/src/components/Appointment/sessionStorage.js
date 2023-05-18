// sessionStorage.js

const getItem = (key) => {
    return JSON.parse(window.sessionStorage.getItem(key));
  };
  
  const setItem = (key, value) => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  const removeItem = (key) => {
    window.sessionStorage.removeItem(key);
  };
  
  export default {
    getItem,
    setItem,
    removeItem,
  };
  