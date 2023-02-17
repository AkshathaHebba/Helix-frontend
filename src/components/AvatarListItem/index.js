import cs from 'classnames'

import styles from "./AvatarListItem.module.css";

const AvatarListItem = ({ className, logo, heading, subHeading}) => {
    return (
        <div className={cs(styles.AvatarListItem__Item, className)}>
            <img className={styles.AvatarListItem__ItemIcon} src={logo} />
            <div className={styles.AvatarListItem__ItemDetails}>
                <span className={styles.AvatarListItem__ItemText}>{heading}</span>
                <span className={styles.AvatarListItem__ItemSubText}>{subHeading}</span>
            </div>
        </div>
    );
};

export default AvatarListItem;