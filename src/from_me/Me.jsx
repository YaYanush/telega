import React from 'react';
import styles from './Me.module.css';
import Time from "../Time";

function Me() {
    return (
        <div className={styles.container}>
            <p className={styles.from_me}>
                <div className={styles.name}>Вова</div>
                <span className={styles.text}>Cаня, прывет! Шо там?</span>
                <Time/>
            </p>
            <div className={styles.img_right}>
                <img src="https://www.intermedia.ru/img/news/343685.jpg"/>
            </div>
        </div>
    );
}

export default Me;
