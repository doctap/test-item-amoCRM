import React from 'react';
import styles from './Supplement.module.scss';

export interface ISupplement {
  title: string
  offer: string
}

export const Supplement = (prop: ISupplement) => {
  return (
    <div>
      <h3 className={styles.title}>{prop.title}</h3>
      <div className={styles.offer}>{prop.offer}</div>
    </div>
  );
};
