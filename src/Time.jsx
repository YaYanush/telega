import React from 'react';
import styles from './from_me/Me.module.css';

function Time() {
    return (

        <div className={styles.time}>{new Date().toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        })}</div>

    );
}

export default Time;
