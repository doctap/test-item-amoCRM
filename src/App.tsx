import React from 'react';
import { Layout, Page, PageNotFound } from './pages';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import { Timer } from './components';

function App () {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Page />} />
          <Route path='/cases' element={<Timer />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
