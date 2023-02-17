import cs from 'classnames'
import styles from './Column.module.css'

const Column = ({ className, children, size = 1 }) => {
    return (
        <div className={cs(styles.Col__Container, styles[`Col__FlexSize-${size}`], className)}>
            {children}
        </div>
    );
};

export default Column;