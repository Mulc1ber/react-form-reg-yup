import React from 'react';
import styles from './Error.module.css';

export const Error = ({ textError }) => {
    return textError && <span className={styles.Error}>{textError}</span>;
};
