import React from 'react';
import style from 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const toastConfig = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const notify = {
  error: (message) => {
    toast.error(message, toastConfig);
  },
  info: (message) => {
    toast.info(message, toastConfig);
  },
  success: (message) => {
    toast.success(message, toastConfig);
  },
};

const Toast = () => <ToastContainer />;

export { style, Toast, notify };
