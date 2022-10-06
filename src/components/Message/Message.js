import React from 'react';
import styles from './Message.module.scss';

const Message = () => {
    return (
        <div className={styles.message}>
            <p className={styles.message__text}>
                Empty field, please add text!
            </p>
        </div>
    )
}

export default Message;