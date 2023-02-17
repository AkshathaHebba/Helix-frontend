import React from 'react';
import Card from "../Card";
import expertsIcon from '../../assets/group.png'
import commentIcon from '../../assets/comment.png'
import upvoteIcon from '../../assets/upvote.png'
import tokenIcon from '../../assets/tokenIcon.svg'

import styles from './About.module.css'

const AboutListItem = ({ icon, text }) => (
    <div className={styles.AboutCard__Item}>
        <img className={styles.AboutCard__ItemIcon} src={icon} />
        <span className={styles.AboutCard__ItemText}>{text}</span>
    </div>
)

const About = ({className}) =>  (
    <Card className={className} heading={'About'}>
        <AboutListItem icon={expertsIcon} text={'246 Experts'}/>
        <AboutListItem icon={commentIcon} text={'100k Questions and Answers'}/>
        <AboutListItem icon={upvoteIcon} text={'50k Upvotes'}/>
        <AboutListItem icon={tokenIcon} text={'145 Tokens Awarded'}/>
    </Card>
);

export default About;