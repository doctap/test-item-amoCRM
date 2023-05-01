import React from 'react';
import styles from './LinkMenu.module.scss';
import { Link } from 'react-router-dom';
import type { MenuLinkTuple1, MenuLinkTuple2 } from '../../../types';

export interface ILinkMenu {
  title: string
  menuPart_1: MenuLinkTuple1
  menuPart_2: MenuLinkTuple2
}

export const LinkMenu = (prop: ILinkMenu) => {
  return (
    <>
      <div className={styles.title}>
        {prop.title}
      </div>
      <div className={styles.menu_columns}>
        <div className={styles.menuPart}>
          {prop.menuPart_1.map(l => (
            <Link to={l.path} key={l.linkName}>{l.linkName}</Link>
          ))}
        </div>
        <div className={styles.menuPart}>
          {prop.menuPart_2.map(l => (
            <Link to={l.path} key={l.linkName}>{l.linkName}</Link>
          ))}
        </div>
      </div>
    </>
  );
};
