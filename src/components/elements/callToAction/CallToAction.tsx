import React from 'react';
import styles from './CallToAction.module.scss';

export interface ICallToAction {
  text: string
  onClick: () => void
}

export const CallToAction = (prop: ICallToAction) => {
  return (
    <button className={styles.callToAction} onClick={prop.onClick}>
      {prop.text}
    </button>
  );
};
