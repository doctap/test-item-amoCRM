import React from 'react';
import { CallToAction, SupplementList, Footer } from '../../components';
import styles from './Page.module.scss';
import {
  aboutCompanyLinks,
  confederationPolicyLink,
  mainPageSupplements,
  menuLinks1,
  menuLinks2
} from '../../contentData';

export const Page = () => {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.slogan}>
          <h1 className={styles.header}>
            Зарабатывайте больше
          </h1>
          <strong className={styles.brand}>
            с WELBEX
          </strong>
          <div className={styles.sloganBottom}>
            Развиваем и контролируем продажи за вас
          </div>
        </div>
        <div className={styles.offerBlock}>
          <div className={styles.offerBlockTitle}>
              Вместе с&nbsp;
            <span className={styles.gradient_1}>бесплатной</span>&nbsp;
            <br/>
            <span className={styles.gradient_2}>консультацией</span> мы дарим:
          </div>
          <div className={styles.items}>
            <SupplementList supplements={mainPageSupplements} />
          </div>
          <div className={styles.CallToAction}>
            <CallToAction text='Получить консультацию' onClick={() => 0} />
          </div>
        </div>
      </main>
      <Footer
        aboutCompany={aboutCompanyLinks}
        menuPart_1={menuLinks1}
        menuPart_2={menuLinks2}
        confederationPolicyLink={confederationPolicyLink}
      />
    </>
  );
};
