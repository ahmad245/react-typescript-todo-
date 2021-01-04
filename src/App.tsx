import React from 'react';

import './style.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { Todo } from './interface';

function App() {
  const [todos,setTodos]=React.useState<Todo[]>([]);

  const handleTodoCreate=(todo:Todo)=>{
      const newTodos=[...todos];
      newTodos.push(todo);
      setTodos(newTodos);
  }

  const handleTodoUpdate=(event: React.ChangeEvent<HTMLInputElement>, id: string)=>{
    const newTodos=[...todos];
    let index=newTodos.findIndex(todo=>todo.id==id);
    newTodos[index].name=event.target.value;
    setTodos(newTodos);

  }
  const handleTodoRemove=(id:string)=>{
    const newTodos=[...todos];
    let index=newTodos.findIndex(todo=>todo.id==id);
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const handleTodoComplete=(id:string)=>{
    const newTodos=[...todos];
    let index=newTodos.findIndex(todo=>todo.id==id);
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <div className="App">
    <React.Fragment>
     <h2>My ToDo APP</h2>
     <ToDoForm
     todos={todos}
     handleTodoCreate={handleTodoCreate}
     />
     <ToDoList
     todos={todos}
     handleTodoUpdate={handleTodoUpdate}
     handleTodoRemove={handleTodoRemove}
     handleTodoComplete={handleTodoComplete}
     
     />
     
     </React.Fragment>
     </div>
     );
  
}

export default App;
