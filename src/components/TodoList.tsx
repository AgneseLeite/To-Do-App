import React from 'react';
// import Todo component
import Todo from './Todo';


const TodoList = ({ todos, setTodos }: any) => {
    // console.log(todos)
    // we log out an array of objects from input field
    // we can map through it and for each object
    // we can render out a todo component

    //p.s. curly brackets in html below means that we can write
    // JS code in them.. 
    // For each todo from the state that we have 
    // we can render out a todo component..
    // and + add changable data, not set value
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todos.map(todo => (
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;