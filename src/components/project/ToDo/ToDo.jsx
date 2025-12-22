import React, { useState } from 'react';
import './ToDo.css';
import { ToDoForm } from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoDate from './ToDoDate';


const todokey = "reactToDo"
const ToDo = () => {
    const [tasks, setTasks] = useState(() => {
        const rawTodos = localStorage.getItem(todokey)
        if (!rawTodos) return []
        return JSON.parse(rawTodos);
        // }) // task list
    })


    // add todo
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        if (!content.trim()) return; // avoid empty tasks

        // avoid duplicate content
        const isDuplicate = tasks.find(
            (task) => task.content === content
        );
        if (isDuplicate) return;

        setTasks((prev) => [...prev, { id, content, checked }]);
    };
    //set data in localStorage
    localStorage.setItem("reactToDo", JSON.stringify(tasks))
    // localStorage.getItem(TaskItem);



    // delete todo
    const handleDeleteToDo = (id) => {
        console.log(id);
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };
    const handleCheckedToDo = (id) => {
        console.log(id);
        setTasks((prevTasks) => prevTasks.map((task) =>
            task.id === id ? { ...task, checked: !task.checked } : task
        )
        )

    };


    // clear all todos
    const handleClearTodoData = () => {
        setTasks([]);
    };

    return (
        <>
            <section className="todo-container">
                <header>
                    <h1>ToDo List</h1>
                    <ToDoDate />
                </header>

                <ToDoForm onAddToDo={handleFormSubmit} />

                <section className="myUnOrdList">
                    <ul>
                        {tasks.map((curtask) => (
                            <ToDoList
                                key={curtask.id}
                                data={curtask.content}
                                id={curtask.id}
                                checked={curtask.checked}
                                onHandleDeleteToDo={handleDeleteToDo}
                                onHandleCheckedToDo={handleCheckedToDo}
                            />
                        ))}
                    </ul>
                </section>

                <section>
                    <button className="clear-btn" onClick={handleClearTodoData}>
                        Clear All
                    </button>
                </section>
            </section>
        </>
    );
};

export default ToDo;
