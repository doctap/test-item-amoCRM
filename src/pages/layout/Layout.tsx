import React from 'react';
import { Header } from '../../components';
import { desktopNavLinks, mobileNavLinks } from '../../contentData';

export const Layout = () => {
  return (
    <Header mobileNavLinks={mobileNavLinks} desktopNavLinks={desktopNavLinks} />
  );
};
