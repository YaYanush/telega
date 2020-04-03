import React from 'react';
import styles from './Them.module.css';
import Time from "../Time";

function Them() {
    return (
        <div className={styles.container}>
            <p className={styles.from_them}>
                <div className={styles.name}>Санёк</div>
                <span className={styles.text}>Привет,Вовка...Не болеем!</span>
                <Time/>
            </p>
            <div className={styles.img_left}>
                <img src="https://cdn2.img.sputnik-georgia.com/images/21639/40/216394031.jpg"/>
            </div>
        </div>

    );
}

export default Them;
