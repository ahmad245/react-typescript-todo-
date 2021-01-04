import * as React from 'react';
import { TodoList } from '../interface';
import ToDoItem from './ToDoItem';

const ToDoList =(props:TodoList)=>{
    return (
        <div className="todo-list">
             <ul>
                 {props.todos.map((todo)=>{
                     return (
                       <li key={todo.id}>
                           <ToDoItem todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                           ></ToDoItem>
                       </li>
                     );
                 })}
             </ul>
        </div>
    )
}
export default ToDoList;