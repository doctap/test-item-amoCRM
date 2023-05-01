import React from 'react';
import { Layout, Page } from './pages';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';

function App () {
  // <Timer />
  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Page />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
