import React from 'react';

import styles from './styles.module.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const Routes = () => (
    <div className={styles.wrapper}>
        <div className={styles.containerHeaderMain}>
            <Header />
            <Main />
        </div>
        <Footer />
    </div>
);

export default Routes;
