import React, { useState, useRef } from 'react';
import Message from '../Message/Message';
import clsx from 'clsx';
import styles from './Item.module.scss';

const Item = ({text, num, id, deleteItem, changeContent}) => {

    const [taskDone, setTaskDone] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [itemInput, setItemInput] = useState(text);
    const [showMessage, setShowMessage] = useState(false);

    const ref = useRef();

    const taskDoneHandler = () => {
        setTaskDone(!taskDone);
    }

    const deleteTaskHandler = () => {
        deleteItem(id);
    }

    const initInput = () => {
        setShowInput(!showInput);
    }

    const changeInputHandler = (e) => {
        setItemInput(e.target.value);
        showMessage && setShowMessage(false);
    }

    const outFocusHandler = (e) => {
        if(e.key === 'Enter' || e.type === 'blur') {
            if (itemInput.length === 0) {
                setShowMessage(true);
                return;
            }
            setShowInput();
            changeContent(itemInput, id);
        }
    }

    const InputField = () => {
        return (
            <input
                className={styles.item__input}
                type="itemtext"
                onChange={changeInputHandler}
                onKeyDown={outFocusHandler}
                onBlur={outFocusHandler}
                autoFocus
                name="itemtext"
                id="itemText"
                ref={ref}
                value={itemInput}
            />
        )
    }


    return (
        <li className={clsx(styles.item, {[styles.item__error]: showMessage})} id={id}>
            {
                showInput ? <InputField /> : (
                    <div className={styles.item__content} onClick={initInput}>
                        <span className={styles.item__num}>{num}.</span>
                        <span
                            className={clsx(styles.item__text,
                                {[styles.item__text__done]: taskDone}
                            )}
                        >
                            {text}
                        </span>
                </div>
                )
            }
            {showMessage && <Message />}
            <div className={styles.item__controls}>
                <button className={styles.item__btn__done} onClick={taskDoneHandler}></button>
                <button className={styles.item__btn__remove} onClick={deleteTaskHandler}></button>
            </div>
        </li>
    )
}

export default Item;