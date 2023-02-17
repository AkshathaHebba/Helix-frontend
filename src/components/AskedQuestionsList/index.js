import React, {useEffect, useState} from 'react';
import Card from "../Card";
import AvatarListItem from "../AvatarListItem";
import avatarLogo from '../../assets/avatarLogo.svg'
import getAllPostedQuestion from "../../services/questions/getAllPostedQuestion";

import styles from './AskedQuestionsList.module.css'
import Spinner from "../Spinner";

const AskedQuestionListCard = ({ question = {} }) => {
    const {title, text, posted_by} = question;
    return (
        <Card className={styles.AskedQuestionListCard__Card}>
            <h2 className={styles.AskedQuestionListCard__QuestionText}>
                {title}
            </h2>
            <div className={styles.AskedQuestionListCard__AnswerText}>
                {text}
            </div>
            <div className={styles.AskedQuestionListCard__Divider}/>
            <div>
                <div className={styles.AskedQuestionListCard__AskedByText}>Asked by:</div>
                <AvatarListItem logo={avatarLogo} heading={posted_by} subHeading={'2 Answers . 1 Question'}/>
            </div>
        </Card>
    )
}
const AskedQuestionList = () => {
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function fetchQuestionsAndUpdateState() {
            setLoading(true);
            const response = await getAllPostedQuestion();
            setLoading(false);
            setQuestions(response)
        }
        fetchQuestionsAndUpdateState()
    }, [])

    return (
        <div className={styles.AskedQuestionList__Container}>
            {loading && <Spinner />}
            {
                questions.map((question) => (
                    <AskedQuestionListCard key={question.title} question={question} />
                ))
            }
        </div>
    );
};

export default AskedQuestionList;