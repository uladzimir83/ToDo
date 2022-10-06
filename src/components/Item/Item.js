import React, { useState, useRef } from 'react';
import Message from '../Message/Message';
import clsx from 'clsx';
import styles from './Item.module.scss';

const Item = ({text, num, id, deleteItem, changeContent}) => {

    const [done, setDone] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [itemInput, setItemInput] = useState(text);
    const [showMessage, setShowMessage] = useState(false);

    const ref = useRef();

    const doneHandler = () => {
        setDone(!done);
    }

    const deleteHandler = () => {
        deleteItem(id);
    }

    const initTextHandler = () => {
        setIsInput(!isInput);
    }

    const changeHandler = (e) => {
        setItemInput(e.target.value);
        showMessage && setShowMessage(false);
    }

    const handlerOutFocus = (e) => {
        if(e.key === 'Enter' || e.type === 'blur') {
            if (itemInput.length === 0) {
                setShowMessage(true);
                return;
            }
            setIsInput();
            changeContent(itemInput, id);
        }
    }

    const InputField = () => {
        return (
            <input
                className={styles.item__input}
                type="itemtext"
                onChange={changeHandler}
                onKeyDown={handlerOutFocus}
                onBlur={handlerOutFocus}
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
                isInput ? <InputField /> : (
                    <div className={styles.item__content} onClick={initTextHandler}>
                        <span className={styles.item__num}>{num}.</span>
                        <span
                            className={clsx(styles.item__text,
                                {[styles.item__text__done]: done}
                            )}
                        >
                            {text}
                        </span>
                </div>
                )
            }
            {showMessage && <Message />}
            <div className={styles.item__controls}>
                <button className={styles.item__btn__done} onClick={doneHandler}></button>
                <button className={styles.item__btn__remove} onClick={deleteHandler}></button>
            </div>
        </li>
    )
}

export default Item;