import React, { useState } from 'react';
import List from '../List/List';
import Message from '../Message/Message';
import styles from './Body.module.scss';
import { v4 as uuid } from 'uuid';

const Body = ({addItem}) => {
    const [text, setText] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [content, setContent] = useState([
        {
            id: uuid(),
            text: 'Relax on Friday',
        }
    ]);

    const addContent = () => {
        if (text.length === 0) {
            setShowMessage(!showMessage);
            return;
        }
        const itemContent = {
            id: uuid(),
            text: text,
        }
        setContent([...content, itemContent]);
        setText('');
    }

    const deleteContent = (id) => {
        setContent(content.filter(item => item.id !== id))
    }

    const changeContent = (text, id) => {
        const arr = content.map(item => {
            if (item.id === id) {
                item.text = text
            }
            return item;
        });
        setContent(arr);
    }

    const handlerChange = (e) => {
        setText(e.target.value);
    }

    const handlerKeyDown = (e) => {
        if(e.key === 'Enter') {
            addContent();
        }
    }

    const hideMessage = () => {
        setShowMessage(false);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Your to-do list</h1>
            <div className={styles.panel}>
                <input 
                    className={styles.panel__input}
                    placeholder="write a task"
                    type="text"
                    name="text"
                    id="text"
                    value={text}
                    onChange={handlerChange}
                    onKeyDown={handlerKeyDown}
                    onFocus={hideMessage}
                />
                <button
                    className={styles.panel__btn}
                    onClick={addContent}
                >
                    ADD
                </button>
                {showMessage && <Message />}
            </div>  
            <List
                content={content}
                deleteItem={deleteContent}
                changeContent={changeContent}
            />
        </div>
    )
}

export default Body;