import cs from 'classnames';

import styles from './Card.module.css'

const Card = ({ heading, children, className }) => {
    return(
        <div className={cs(styles.Card__Container, className)}>
            {heading && <h2 className={styles.Card__Heading}>{heading}</h2>}
            {children}
        </div>
    )
}

export default Card