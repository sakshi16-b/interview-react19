import React from 'react';
import { MdDeleteForever, MdCheck } from "react-icons/md";

const ToDoList = ({ data, id, onHandleDeleteToDo, onHandleCheckedToDo,checked }) => {
    return (
        <li className="todo-item">

            <span className={checked ? 'checked' : ''}>{data}</span>

            <button className="check-btn"
                onClick={() => onHandleCheckedToDo(id)}>
                <MdCheck />
            </button>

            <button
                className="delete-btn"
                onClick={() => onHandleDeleteToDo(id)}
            >
                <MdDeleteForever />
            </button>
        </li>
    );
};

export default ToDoList;
