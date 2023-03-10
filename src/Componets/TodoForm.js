import React , {useState} from 'react';



export default function TodoForm(props) {

const [input, setInput] = useState("");

const handleChange = e => {
    setInput(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault();
    props.addTask( {
    id: Math.floor(Math.random() *100000),
    text:input,
    iscomplete: false
    })
 setInput('')
}


  return (
   <form className='todo-form'>
<input type= "text" placeholder='Add a todo' onChange= {handleChange} className="todo-input"value={input} name="text" />
<button type="submit"  onClick={handleSubmit} className='todo-btn'> ADD TODO</button>

   </form>
  );
}
