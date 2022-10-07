import React from 'react';
import clsx from 'clsx';
import styles from './TaskCounter.module.scss';

const TaskCounter = ({value}) => {
    let tasksLevel,
        tasksMood;

    switch(true) {
        case(value >= 10):
        tasksLevel = '__danger';
        tasksMood = '"God" level';
        break;

        case(value >= 8):
        tasksLevel = '__worse';
        tasksMood = 'Are you serious?';
        break;

        case(value >= 5):
        tasksLevel = '__medium';
        tasksMood = 'May be stop?';
        break;

        case(value >= 3):
        tasksLevel = '__light';
        tasksMood = 'You are the greatest';
        break;

        default:
            tasksLevel = '';
            tasksMood = 'Just do it';
    }

    let taksTitle = value <= 1 ? 'Task:' : 'Tasks:';

    return (
        <div className={styles.counter}>
            {taksTitle} <span
                        className={clsx(styles.counter__value, 
                            styles[`counter__value${tasksLevel}`])}
                   >
                    {`${value} -- ${tasksMood}`}
                   </span>
        </div>
    )
}

export default TaskCounter;