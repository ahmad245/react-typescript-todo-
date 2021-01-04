import * as React from 'react';
import { TodoItem } from '../interface';

const ToDoItem = (props: TodoItem) => {
    return (
        <div className="todo-item">
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {props.todo.isCompleted ? (
                    <span className="todo-item-checked">✔</span>
                ) : (
                        <span className="todo-item-unchecked" />
                    )}
            </div>
            <div className="todo-item-input-wrapper">
                <input
                    value={props.todo.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
                />
            </div>
            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
                ⨯
        </div>
        </div>
    )
}

export default ToDoItem;