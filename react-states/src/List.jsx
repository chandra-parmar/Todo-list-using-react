import {useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default  function TodoList()
{


    let [todos,setTodos] = useState([{task:"sample-task",id:uuidv4(),isDone:false}])
   let  [newTodo,setNewTodo] = useState("")



   let addTask =()=>{
    setTodos([...todos,{task:newTodo,id:uuidv4(), isDone:false}])
    setNewTodo("")
   }



   let updateTodoValue =(event)=>{
    setNewTodo(event.target.value)
   }

   let deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
   }

   let markAsDone=(id)=>{
    setTodos(
        todos.map(todo =>{
            if(todo.id == id)
            {
               return{
                ...todo,
                isDone:true 
               }

            }
            else{
                return todo
            }
        })
    )
   }



   return(
    <div>
          <h1>Todo list</h1>
    <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
    <button onClick={addTask}>Add task</button>
    <br>

    </br>
    <br></br>
    <ul>
        {
            todos.map((todo)=>(
            <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine :"line-through"} :{}}>{todo.task}</span>
            &nbsp;&nbsp;
            <button onClick={ ()=> deleteTodo(todo.id)}>Remove</button>
            <button onClick={()=> markAsDone(todo.id)}>Mark as done </button>
            </li>
            
        ))
        
        }
    </ul>
    </div>

   ) 
}