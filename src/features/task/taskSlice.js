import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks:[
    {
    id:9867896,
    text:'initial state task'
    },
    {
      id:986,
      text:'initial state task 2'
    }
  ],
  user:[]
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state,action) => {
        const task = {
            id: Date.now(),
            text: action.payload
        }
        state.tasks.push(task)
    },
    removeTask: (state,action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    addUser: (state,action) => {
        // const user = {
        //     token: action.payload
        // }
        state.user.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask,removeTask ,addUser} = taskSlice.actions

export default taskSlice.reducer