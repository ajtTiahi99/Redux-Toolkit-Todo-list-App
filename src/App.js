import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { addTask } from './store/slices/TaskSlice';
import DisplayTasks from './Components/DisplayTasks';

function App() {

  const [input,setInput] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    dispatch(addTask(input))
    setInput('')
  }

  return (
    <div className="container">
      <h1>To do list App</h1>
       <form>
          <input className='taskInput' type="text" placeholder='Enter Task' value={input} onChange={handleChange}></input>
          <button className='btn' onClick={handleAddTask}>Add</button>
       </form>  
       <ul className='taskList'>
          <DisplayTasks/>
       </ul>
    </div>
  )
}

export default App;
