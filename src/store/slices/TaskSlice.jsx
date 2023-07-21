import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:'Tasks',
    initialState:[],
    reducers:{
        addTask(state,action){
            // state.push(action.payload)
            const newData = {
                id:Date.now(),
                title:action.payload,
                completed:false
            }
            state.push(newData)
        },
        deleteTask(state,action){
            state.splice(action.payload,1)
        },
        completeTask(state,action){
            const index = state.findIndex((todo)=>todo.id===action.payload.id)
            // console.log('index:-',index)
            state[index].completed = action.payload.completed
            // console.log('action.payload.id from completeTask',action.payload.id)
            // console.log('state[index].completed',state[index].completed)
            // console.log('action.payload.completed',action.payload.completed)
        },
    }
})


export default taskSlice.reducer
export const { addTask,deleteTask,completeTask } = taskSlice.actions
