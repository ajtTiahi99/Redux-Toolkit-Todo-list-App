import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import '../App.css'
import { completeTask, deleteTask } from '../store/slices/TaskSlice'

const DisplayTasks = () => {

    const data = useSelector((state)=>{
        return state.tasks
    })
    
    // remove this later on
    // data.map((taskTitle,id)=>{
    //     console.log(taskTitle,id)
    // })
    //

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }  

    const handleStrike = (id,e) => {
        const check = e.target.checked
        dispatch(completeTask({id,completed:check}))
        // console.log('id from displayTask',id)
    }  

    return (
        data.map((task,id)=>{
            return <li key={id} className='task'>
                        {task.title}
                        <div>
                            <input className='checkbox' type="checkbox" onChange={(e)=>handleStrike(task.id,e)}/>
                            <button className='btn btnDelete' onClick={()=>handleDelete(id)}>delete</button>
                        </div>
                    </li>
        })
    )
}

export default DisplayTasks
