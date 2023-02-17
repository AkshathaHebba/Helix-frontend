import styles from './Modal.module.css'
import Input from "../Input";
import Button from "../Button";
import closeIcon from '../../assets/closeIcon.svg'
import Card from "../Card";
import {useCallback, useState} from "react";
import postQuestion from "../../services/questions/postQuestion";
import Spinner from "../Spinner";


const Modal = ({open, onClose, header, children}) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)

    const postQuestionCallback = useCallback(async () => {
        const questionObject = {
            title,
            text,
            // Only Posted By Field is Hard Coded and can be removed byb implmenting login.
            "posted_by": "Akshatha Hebbar",
            "posted_date": new Date().toISOString()
        }
        try {
            setErrorMessage(false)
            setLoading(true)
            await postQuestion(questionObject)
            onClose()
        } catch (e) {
            setErrorMessage('Question Posting Failed')
        }
        setLoading(false)
    }, [title, text])

    return open ? (
        <>
            <div className={styles.Modal__Backdrop}/>
            <div className={styles.Modal__Container}>
                <Card className={styles.Modal__Wrapper}>
                    <div className={styles.Modal__Header}>
                        <h2 className={styles.Modal__HeaderText}>
                            New Question
                        </h2>
                        <button className={styles.Modal__CloseButton} onClick={onClose}><img src={closeIcon}
                                                                                             alt={'Close Modal'}/>
                        </button>
                    </div>
                    <div className={styles.Modal__Divider}/>
                    <Input disabled={loading} className={styles.Modal__Input} ElementType={'input'} type={'text'}
                           name={'title'} value={title} onChange={setTitle} placeHolder={'Enter the text title'}/>
                    <div className={styles.Modal__TextSubmitContainer}>
                        <div className={styles.Modal__TextAreaContainer}>
                            <Input disabled={loading} className={styles.Modal__TextAreaFieldContainer}
                                   ElementType={'textarea'} name={'question'} placeHolder={'Write your text here'}
                                   value={text} onChange={setText} fieldClassName={styles.Modal__TextAreaField}/>
                        </div>
                        <div className={styles.Modal__ActionsContainer}>
                            {loading && <Spinner/>}
                            <div className={styles.Modal__ErrorMessageContainer}>{errorMessage}</div>
                            <Button onClick={postQuestionCallback} type='button'
                                    disabled={!title || !text || loading}>Post</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    ) : null
};

export default Modal;