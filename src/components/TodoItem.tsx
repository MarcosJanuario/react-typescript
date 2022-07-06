import React, { FC } from 'react';
import classes from './TodoItem.module.css';

type TodoItemType = {
  text: string;
  onRemoveTodo: () => void;
};

const TodoItem: FC<TodoItemType> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
