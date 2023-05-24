import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../features/task/taskSlice";


const Task = () => {
    const [task,setTask] = useState('')
    const tasks = useSelector((state) => state.tasks.tasks )
    const dispatch = useDispatch()
    console.log('tasks:',tasks)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask(task))
        setTask('')
    }

    const handleDelete = (id) => {
        dispatch(removeTask(id))
    }
    return(
        <div className="flex flex-col justify-center items-center p-8">
        <h1>Task</h1>
        <form className="bg-grey-500" >
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className=" bg-slate-400 " />
            <button onClick={handleSubmit } className="bg-green-500 px-1 rounded ml-2" >Add</button>
        </form>

        {
            tasks.map((task,key)=>(
                <div key={key} className="flex p-2  " >
                    <div className="mr-2">{task.text}</div>
                    <button className="bg-red-500 px-1 rounded " onClick={() => handleDelete(task.id)} >Delete</button>
                </div>
            ))
        }
        </div>
    )
}

export default Task