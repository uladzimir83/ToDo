import React from 'react';
import styles from './List.module.scss';
import Item from '../Item/Item';

const List = ({content, deleteItem, changeContent}) => { 

    return (
        <div className={styles.list__wrapper}>
            <ul className={styles.list}>
                {
                    content.map((item, idx) => {
                        return (
                            <Item
                                text={item.text}
                                key={item.id}
                                num={idx+1}
                                id={item.id}
                                deleteItem={deleteItem}
                                changeContent={changeContent}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;