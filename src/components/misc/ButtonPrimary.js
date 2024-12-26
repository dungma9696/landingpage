import React from 'react';

const ButtonPrimary = ({ children, addClass, onClick, type }) => {
  return (
    <button
      className={
        'py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-yellow-400 hover:shadow-orange-md transition-all outline-none ' +
        addClass
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
