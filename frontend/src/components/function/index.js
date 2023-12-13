import Swal from "sweetalert2";

export const API_BASE_URL = 'http://localhost:5000';

export const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const showAlert = (icon, title, html) => {
  Swal.fire({
    icon,
    title,
    html,
    allowOutsideClick: false,
  });
};

export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const showErrorAlert = (message) => {
  showAlert('error', 'Error', message);
};

export const showSuccessAlert = (message) => {
  showAlert('success', 'Success', message);
};