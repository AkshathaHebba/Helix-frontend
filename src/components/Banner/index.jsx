import React from 'react';
import protocol from '../../assets/protocol.png'
import Row from '../Row'

import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.Banner__Container}>
            <img src={protocol}
                 alt={'protocol_img'}
                 className={styles.Banner__Image}/>
            <h1 className={styles.Banner__HeadingText}>Near Protocol</h1>
        </div>
    );
};

export default Banner;