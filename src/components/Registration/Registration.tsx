import React from 'react';
import styles from './Registration.module.css';
import SuperButton from '../UI/SuperButton/SuperButton';

const Registration = () => {
    return (
        <div>
            <h3>Registration</h3>
            <form action="#" className={styles.registrationForm}>
                <fieldset className={styles.registrationForm__fieldset}>
                    <legend>Your personal data</legend>
                    <label htmlFor='name' className={styles.registrationForm__label}><span>Your name: </span><input type='text' name={'name'} id={'name'}/></label>
                    <label htmlFor='surname' className={styles.registrationForm__label}><span>Your surname: </span><input type='text' name={'surname'} id={'surname'}/></label>
                    <label htmlFor='phone' className={styles.registrationForm__label}><span>Your phone number: </span><input type='text' name={'phone'} id={'phone'}/></label>
                </fieldset>
                <fieldset className={styles.registrationForm__fieldset}>
                    <legend style={{left: 0}}>Data to log in</legend>
                    <label htmlFor='email' className={styles.registrationForm__label}><span>e-mail: </span><input type='email' name={'email'} id={'email'}/></label>
                    <label htmlFor='password' className={styles.registrationForm__label}><span>Create your password: </span><input type='password' name={'password'} id={'password'}/></label>
                </fieldset>
                <SuperButton>REGISTER</SuperButton>
            </form>
        </div>
    );
};

export default Registration;