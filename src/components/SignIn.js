import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/task/taskSlice";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Task from "./Task";


const SignIn = () => {

   // const[username,setUsername] = useState('')
    const[email,setEmail] = useState('eve.holt@reqres.in')
    const[password,setPassword] = useState('pistol')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    console.log('user before dispatch',user)

    const redirectUser = () => {
        navigate('/task')
    }
    const handleSubmit = (e) => {
        console.log(email,password)
        e.preventDefault()
        fetch('https://reqres.in/api/login',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },            
            body :JSON.stringify( {
                //username : username,
                email : email,
                password : password
            }),
        })
        .then(res=>res.json())
        .then(user => {
            if(user.token){
                dispatch(addUser(user))
            console.log(user)
            redirectUser()
            }else{
            console.log('error in then',user)

            }
        })
        .catch((error)=>{
            console.error('USER login failed',error)
        })
    }

    return(
        <div className="w-screen flex flex-col justify-center items-center" >
            <form className="flex flex-col" >
                <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
            </form>
            <button onClick={handleSubmit} >submit</button>
        </div>
    )
}

export default SignIn