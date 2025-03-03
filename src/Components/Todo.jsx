// import { useRef } from 'react';
// import { useState } from 'react';
// import '../CSS/Todo.css';
// import { useEffect } from 'react';
// import Todoitems from './Todoitems';
// let count=0;
// const Todo = () => { 

//   const[todos,setTodos]=useState([]);
//   const inputRef=useRef(null);

//   const add=()=>{
//     setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
//     inputRef.current.value="";
//   }

//   useEffect(()=> {
//     console.log(todos);
//   },[todos])

//   return (
//     <div className='todo'>
//       <div className="todoheader">To-Do List</div>
//       <div className="todo-add"> <div >
//         <input ref={inputRef} type="text" placeholder='Add your Task' className='todo-input'/>
//         <button onClick={()=>{add()}} className="todo-btn" type="button">ADD</button> </div>
//         <div className="todolist">
//           {todos.map((item,index)=>{
//             return <Todoitems key={index} no={item.no} display={item.display} text={item.text} />
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Todo;


import { useRef, useState, useEffect } from 'react';
import '../CSS/Todo.css';
import Todoitems from './Todoitems';

const Todo = () => {
  // State for todos and input value
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  // Add a new todo
  const add = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, { no: todos.length + 1, text: inputValue, display: '' }]);
    setInputValue(''); // Clear input via state
  };

  // Log todos for debugging
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todoheader">To-Do List</div>
      <div className="todo-input-section">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your Task"
          className="todo-input"
          value={inputValue} // Controlled input
          onChange={(e) => setInputValue(e.target.value)} // Update state on change
        />
        <button onClick={add} className="todo-btn" type="button">
          ADD
        </button>
      </div>
      <div className="todolist">
        {todos.map((item) => (
          <Todoitems
            key={item.no} // Use unique no as key
            no={item.no}
            display={item.display}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;