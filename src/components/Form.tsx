import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }: any) => {
    
    // here we can write functions etc..

    const inputTextHandler = (e: any) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
        
    };

    const submitTodoHandler = (e: any) => {
        e.preventDefault();
        // existing and new todos array
        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        // reset input field - set state back to zeeroooo
        setInputText('');
    }

    return(
        <div>
            <form>
                <input 
                // add value field to actually update/reset UI input value field
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
                /> 
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    );
}

export default Form;