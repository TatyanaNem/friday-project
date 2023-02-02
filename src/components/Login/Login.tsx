import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Login.module.css';
import SuperButton from '../UI/SuperButton/SuperButton';

const Login = () => {
    return (
        <div className={styles.login}>
            <h3>Log in</h3>
            <form action="#" className={styles.loginForm}>
                <div>
                    <label htmlFor='email' className={styles.loginForm__label}><span>E-mail: </span><input type='email' name={'email'} id={'email'}/></label>
                    <label htmlFor='password' className={styles.loginForm__label}><span>Password: </span><input type='password' name={'password'} id={'password'}/></label>
                    <NavLink to={'/passwordRecovery'}>Forgot your password?</NavLink>
                </div>
                <SuperButton>LOG IN</SuperButton>
            </form>
        </div>
    );
};

export default Login;