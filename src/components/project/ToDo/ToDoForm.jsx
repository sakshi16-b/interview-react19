import { useState } from "react"
 import './ToDo.css';

export const ToDoForm = ({ onAddToDo }) => {

    const [inputValue, setInputValue] = useState({
        id:"",
        content:"",
        checked:false
    });
    //input change
    const handleInputChange = (e) => {
        setInputValue({ id: Date.now(), content: e.target.value, checked: false })
    }
    //form submit
    const handleFormSubmit = (e) => {
        e.preventDefault(); // 🚫 stop page reload

        if (!inputValue.content.trim()) return;

        onAddToDo({
            id: Date.now(), // ✅ unique id
            content: inputValue.content,
            checked: false,
        });
        setInputValue({ id: '', content: '', checked: false })

    }

    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input"
                        onChange={handleInputChange}
                        autoComplete='off'
                        value={inputValue.content} />
                </div>
                <div>
                    <button type="submit" className='todo-btn'>Add Task</button>

                </div>
            </form>
        </section>
    )
}