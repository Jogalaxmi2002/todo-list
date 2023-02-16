//import React from 'react';
//import { useState } from 'react/cjs/react.development';
//import React, { useState, useEffect } from "react";
import React, { useState } from "react";

import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoList() {
  //state a Array which hold all TODOS
const [todos, setTodos] = useState([]);

//Add todo to list
const addTask = task => {
    if (!task.text){
        return
    }

const newTodos =[task ,...todos];
setTodos (newTodos);


}

//Remove todo from list
const removeTask = id => {
  let updatedTasks = [...todos].filter(task => task.id !== id)
  
    setTodos (updatedTasks)
   
}

//Task is completed
const completeTask = id => {
  let updatedTasks = todos.map(todo => {
    if (todo.id === id){
      todo.iscomplete = true;
    }
    return todo;
  })
setTodos (updatedTasks)
  
}


  return (
    <div>
        <TodoForm addTask={addTask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} > </Todo>
    </div>
  )
  
}
