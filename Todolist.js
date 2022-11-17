import React, {useState, useEffect} from "react";
import axios from "axios";

const  TodoList = () =>{
  const [todos, setTodos] = useState([]);
  const [title,setTitle] = useState('');

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res =>{
      console.log(res.data)
      setTodos(res.data)
    }).catch(err =>{
      console.log(err);
    })
  },[]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title: title,
    })
    .then(res =>{
      console.log(res)
      alert(res.status)
    })
    .catch(err =>
      console.log(err))
  };
  return (
      <div className="container">
        <h1>TodoList</h1>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="button" onClick={handleSubmit} >Submit</button>
        {todos.map(todo => <li key={todo.id}>Todo {todo.id} : {todo.title}</li>)}
      </div>
    );
};

export default TodoList;