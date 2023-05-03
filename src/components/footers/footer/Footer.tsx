import React from 'react';
import type {
  AboutCompanyLinkTuple,
  ConfederationPolicyLink,
  MenuLinkTuple1,
  MenuLinkTuple2
} from '../../../types';
import { Link } from 'react-router-dom';
import { Contacts, LinkMenu } from '../../elements';
import { allCompanyContacts } from '../../../contentData';
import styles from './Footer.module.scss';

export interface IFooter {
  aboutCompany: AboutCompanyLinkTuple
  menuPart_1: MenuLinkTuple1
  menuPart_2: MenuLinkTuple2
  confederationPolicyLink: ConfederationPolicyLink
}

export const Footer = (prop: IFooter) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className={styles.footerBody}>
          <div className={styles.columns}>
            <div className={styles.aboutCompany}>
              <div className={styles.title}>
                о компании
              </div>
              <div className={styles.links}>
                {prop.aboutCompany.map(l => (
                  <Link to={l.path} key={l.linkName}>{l.linkName}</Link>
                ))}
              </div>
            </div>

            <div className={styles.LinkMenu}>
              <LinkMenu
                title='меню'
                menuPart_1={prop.menuPart_1}
                menuPart_2={prop.menuPart_2}
              />
            </div>
          </div>

          <div className={styles.Contacts}>
            <div className={styles.title}>
              контакты
            </div>
            <div className={styles.contactsList}>
              <Contacts {...allCompanyContacts} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
          ©WELBEX 2022. Все права защищены.
        <Link to={prop.confederationPolicyLink.path}>
          {prop.confederationPolicyLink.linkName}
        </Link>
      </div>
    </footer>
  );
};
