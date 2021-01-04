export interface Todo{
 id:string;
 name:string;
 isCompleted:boolean
}
export interface TodoForm{
    todos:Todo[];
    handleTodoCreate:(todo:Todo) =>void;
}
export interface TodoList{
    todos:Todo[];
    handleTodoUpdate:(event:React.ChangeEvent<HTMLInputElement>,id:string)=>void;
    handleTodoRemove:(id:string)=>void;
    handleTodoComplete:(id:string)=>void;
}
export interface TodoItem{
    todo:Todo;
    handleTodoUpdate:(event:React.ChangeEvent<HTMLInputElement>,id:string)=>void;
    handleTodoRemove:(id:string)=>void;
    handleTodoComplete:(id:string)=>void;
}