import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contacts.module.scss';
import type { ICompanyContacts } from '../../../types';

export const Contacts = (prop: ICompanyContacts) => {
  const address = prop.address !== undefined
    ? <div className={styles.address}>{prop.address}</div>
    : null;

  return (
    <>
      <Link
        className={styles.linkCallNumber}
        to={prop.phoneNumber}
      >
        {prop.phoneNumber}
      </Link>
      <div className={styles.messengerLinks}>
        {prop.messengers.map(m => (
          <Link to={m.path} key={m.name}><img src={m.icon} alt={m.name} /></Link>
        ))}
      </div>
      {address}
    </>
  );
};
