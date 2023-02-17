import React from 'react';
import PropTypes from 'prop-types'

import styles from './Button.module.css';

const Button = ({type, children, disabled, onClick}) => {
    return (
        <button onClick={onClick} className={styles.Button} type={type} disabled={disabled}>{children}</button>
    );
};

Button.defaultProps = {
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;