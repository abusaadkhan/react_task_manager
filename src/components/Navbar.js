import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    // const handleSignout = (e) => {
    //     //console.log(email,password)
    //     e.preventDefault()
    //     fetch('https://reqres.in/api/logout',{
    //         method : 'POST',
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },            
    //         // body :JSON.stringify( {
    //         //     //username : username,
    //         //     email : email,
    //         //     password : password
    //         // }),
    //     })
    //     .then(res=>res.json())
    //     .then(user => {
    //         if(user.token){
    //         console.log(user)
    //         redirectUser()
    //         }else{
    //         console.log('error in then',user)

    //         }
    //     })
    //     .catch((error)=>{
    //         console.error('USER login failed',error)
    //     })
    // }
    return(
        <div className="w-screen h-4 p-8 flex items-center bg-slate-500 relative">
            <div className="logo" >LOGO</div>
            <div className="sign flex items-center absolute right-4">
                <Link to='/signup' ><div className="mx-2" >SignUp</div></Link>
                <Link to='/signin' ><div className="mx-2">SignIn</div></Link>
            </div>
        </div>
    )
}

export default Navbar