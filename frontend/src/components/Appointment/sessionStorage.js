// sessionStorage.js

// This file provides a custom implementation of the getItem, setItem, and removeItem methods for the sessionStorage object. By mocking these methods, you can control the behavior of sessionStorage in your tests. It allows you to simulate storing and retrieving data from sessionStorage without affecting the actual browser storage.

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
  