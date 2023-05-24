import React, { useState } from "react";


const SignUp = () => {

    const[username,setUsername] = useState('')
    const[email,setEmail] = useState('eve.holt@reqres.in')
    const[password,setPassword] = useState('pistol')

    const handleSubmit = (e) => {
        console.log(username,email,password)
        e.preventDefault()
        fetch('https://reqres.in/api/register',{
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
        .then(user => console.log('user registered successfully',user)
        )
        .catch((error)=>{
            console.error('USER registration unsuccesfull',error)
        })
    }

    return(
        <div className="w-screen flex flex-col justify-center items-center" >
         <form className="flex flex-col" >
            <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)} ></input>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            <input type="password" placeholder="Enter Username" value={password} onChange={(e)=>setPassword(e.target.value)} ></input>
         </form>
         <button onClick={handleSubmit} >submit</button>
        </div>
    )
}

export default SignUp