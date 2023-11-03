import React, { useEffect, useState } from 'react';
import "../Styles/toDo.css"

const DoApp = () => {

    const [todos, settodos] = useState([])
    const [task, settask] = useState('')
    

    const addTodo = () => {
        if (task.trim() !== '') {
          settodos([...todos, task]);
          settask('');
        }
      };

      const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        settodos(updatedTodos);
      };


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
     
  return (
    <div className="app">
     <h1>To-Do List</h1>
     <div className='input-Container'>
     <input type='text' placeholder='Add To-Do' onChange={(e)=>settask(e.target.value)} value={task} />

     <button onClick={addTodo} className='butn'>Add</button>
     </div>
      
      <ul className='todo-list'>
        {todos.map((todo, index)=>(
           <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
           </li>

        ))}
      </ul>

      
    </div>
  );
};

export default DoApp;
