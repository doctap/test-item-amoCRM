import React from 'react';
import { DefaultLogo } from '../../logoModels';
import { Outlet, Link } from 'react-router-dom';
import { Contacts } from '../../elements';
import type { DesktopNavLinkTuple, MobileNavLinks } from '../../../types';
import { companyContacts } from '../../../contentData';
import styles from './Header.module.scss';

export interface IHeader {
  desktopNavLinks: DesktopNavLinkTuple
  mobileNavLinks: MobileNavLinks
}

export const Header = (prop: IHeader) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <DefaultLogo />
          </div>
          <nav className={styles.desktopNav}>
            {prop.desktopNavLinks.map(l => (
              <Link key={l.linkName} to={l.path}>{l.linkName}</Link>
            ))}
          </nav>
          <nav className={styles.mobileNav}>
            {prop.mobileNavLinks.map(l => (
              <Link key={l.linkName} to={l.path}>{l.linkName}</Link>
            ))}
          </nav>
        </div>
        <div className={styles.Contacts}>
          <Contacts {...companyContacts} />
        </div>
      </header>
      <Outlet />
    </>
  );
};
