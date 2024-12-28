import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Toaster } from 'sonner';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'bg-orange-500 text-white-500 sm:text-xl',
        }}
      />
    </>
  );
};

export default Layout;
