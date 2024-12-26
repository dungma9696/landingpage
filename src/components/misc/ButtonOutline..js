import React from 'react';

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-yellow-400 text-yellow-400 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-yellow-400 hover:text-white-500 transition-all hover:shadow-orange ">
      {' '}
      {children}
    </button>
  );
};

export default ButtonOutline;
