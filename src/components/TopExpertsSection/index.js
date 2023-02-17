import React from 'react';
import AvatarListItem from "../AvatarListItem";
import Card from "../Card";
import avatarLogo from '../../assets/avatarLogo.svg'
import upvoteFilledIcon from '../../assets/upvoteFilledIcon.svg'


import styles from './TopExperts.module.css'

const TopExpertsSection = ({ className }) =>  (
    <Card className={className} heading={'Top Experts'}>
        <ul>
            <AvatarListItem className={styles.TopExperts__AvatarListItem} logo={avatarLogo} heading={'Pseudo Near Expert'} subHeading={<>47 <img className={styles.TopExperts__ItemIcon} src={upvoteFilledIcon} /> collected</>}/>
            <AvatarListItem className={styles.TopExperts__AvatarListItem} logo={avatarLogo} heading={'Near Expert'} subHeading={<>47 <img className={styles.TopExperts__ItemIcon} src={upvoteFilledIcon} /> collected</>}/>
            <AvatarListItem className={styles.TopExperts__AvatarListItem} logo={avatarLogo} heading={'Bitcoin Maxi'} subHeading={<>47 <img className={styles.TopExperts__ItemIcon} src={upvoteFilledIcon} /> collected</>}/>
            <AvatarListItem className={styles.TopExperts__AvatarListItem} logo={avatarLogo} heading={'Ethereum Maxi'} subHeading={<>47 <img className={styles.TopExperts__ItemIcon} src={upvoteFilledIcon} /> collected</>}/>
        </ul>
    </Card>
);

export default TopExpertsSection;