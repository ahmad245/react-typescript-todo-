import * as React from 'react';
import { Todo, TodoForm } from '../interface';
import shortid from 'shortid';




const ToDoForm = (props: TodoForm) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [values, setValues] = React.useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(event.target.value);
    }

    const handleInputEnter = (event: React.KeyboardEvent) => {
        // Check for "Enter" key
        if (event.key === "Enter") {
            // Prepare new todo object
            const newTodo: Todo = {
                id: shortid.generate(),
                name: values,
                isCompleted: false
            }
            // Create new todo item
            props.handleTodoCreate(newTodo)
            // Reset the input field
            if (inputRef && inputRef.current) {
                inputRef.current.value = ""
            }
        }
    }
    return (<div className="todo-form">
        <input
            ref={inputRef}
            type="text"
            placeholder="Enter new todo"
            onChange={event => handleInputChange(event)}
            onKeyPress={event => handleInputEnter(event)}
        />
    </div>
    );
}

export default ToDoForm;