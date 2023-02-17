import {useCallback, useState} from "react";
import Modal from "../Modal";

import styles from './Header.module.css'

const Header = () => {
    const [showPostQuestionModal, setShowPostQuestionModal ] = useState(false);
    const toggleShowPostQuestionModal =  useCallback(() => {
        setShowPostQuestionModal(flag => !flag);
    }, [])

    return(
            <header className={styles.Header__Container}>
                <Modal open={showPostQuestionModal} onClose={toggleShowPostQuestionModal}>
                    Modal Content
                </Modal>
                <div className={styles.Header__Wrapper}>
                    <button className={styles.Header__Button} onClick={toggleShowPostQuestionModal}> Ask a question </button>
                </div>
            </header>
    )
}

export default Header