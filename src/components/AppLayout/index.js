import styles from './AppLayout.module.css';
import {Children} from "react";

const AppLayout = ({ header, footer, children }) => {
    const arrayChildren = Children.toArray(children);
    return (
        <>
            {header}
            <section className={styles.AppLayout__Container}>
                {children}
            </section>
            {footer}
        </>
    );
};

export default AppLayout;