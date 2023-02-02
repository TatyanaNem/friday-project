import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>Logo</div>
                <nav className={styles.header__navigation}>
                    <nav className={styles.siteNavigation}>
                        <NavLink to={'/'}>main</NavLink>
                        <NavLink to={'/profile'}>profile</NavLink>
                        <NavLink to={'/test'}>test</NavLink>
                    </nav>
                    <nav className={styles.userNavigation}>
                        <NavLink to={'/login'}>login</NavLink>
                        <NavLink to={'/registration'}>registration</NavLink>
                    </nav>
                </nav>
            </div>
        </header>
    );
};

export default Header;