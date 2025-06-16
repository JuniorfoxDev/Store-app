// src/utils/validators.js

export const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidPassword = (password) => {
    return password.length >= 6;
};

export const isEmpty = (value) => {
    return !value || value.trim() === '';
};
  