import React, {useState} from 'react';
import cs from 'classnames';
import Row from '../Row'

import styles from './Input.module.css'

const Input = ({name, ElementType = 'input', type, placeHolder, value, onChange, className, fieldClassName, disabled }) => {
    const [errorMessage,setErrorMessage] = useState(false);

    const handleTextChange = (e) => {
        let value = e.target.value;
        if(value === ''){
            setErrorMessage(false)
        }else if(value !== '' && value.trim().length <= 10){
            setErrorMessage(`${name} must be atleast 10 characters`)
        }else{
            setErrorMessage(false)
        }
        onChange(value);
    }

    return (
        <Row className={cs(styles.Input__FieldContainer, className)}>
            <ElementType disabled={disabled} className={cs(styles.Input__Field, styles[`Input__Field--${ElementType}`], fieldClassName)} name={name} type={type} value={value} onChange={handleTextChange} placeholder={placeHolder}/>
            {errorMessage && <div className={styles.Input__ErrorMessage}>{errorMessage}</div>}
        </Row>
    );
};

export default Input;