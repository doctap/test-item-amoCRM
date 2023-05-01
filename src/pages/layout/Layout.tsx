import React from 'react';
import { Header } from '../../components';
import { navLinks } from '../../contentData';

export const Layout = () => {
  return (
    <Header navLinks={navLinks} />
  );
};
