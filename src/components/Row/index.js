import cs from 'classnames';

import styles from './Row.module.css'

const Row = ({ className, children }) => {
    return (
        <div className={cs(styles.Row__Container, className)}>
            {children}
        </div>
    );
};

Row.propTypes = {};

export default Row;