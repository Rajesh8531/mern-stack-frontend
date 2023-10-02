import React from 'react'
import { useState } from 'react'
import { NavLink, redirect, useLoaderData,useNavigate } from 'react-router-dom'

export async function loader(){
  return await fetch('http://localhost:3000/message').then(res=>res.json()).then(data=>(data))
}

function Register() {
  let [user,setUser] = useState({
    name : '',
    username:'',
    password:''
  })
  let navigate = useNavigate()

  let [message,setMessage] = useState('')
  function onSubmit(e){
    e.preventDefault()
    if(user.name.length < 4){
      setMessage("Name should be more than 3 characters")
    }
    else if (!user.username.endsWith(".com") ) {
      setMessage("Enter a valid email.")
    } else if ( user.password.length < 8){
      setMessage("Password should not be less than 8 characters.")
    }    
    else {
      fetch("https://linkedin-clone-backend-lol0.onrender.com/register",{
      method:'POST',
      body:JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res=>res.json()).then(data=>{
      if(data.message == true){
        navigate('/main',{state:data})
      }
      else{
        setMessage("The given email was already existing. Try logging in or create another one.")
        navigate('/')
      }
    })
    }
    
  }
  

  function onChangeHandler(event){
    setUser(prevdata => ( {
      ...prevdata,
      [event.target.name] : event.target.value
    }))
  }

  return (
    <div className='w-1/3 mx-auto my-20 border bg-white rounded-lg'>
      <form className='flex flex-col gap-4 py-2 px-4 text-sm font-semibold text-gray-500 ' >
        <label htmlFor="name">Name</label>
        <input className='text-black px-2 text-sm border h-12  border-black' required='required' type="text" name="name" id="name" value={user.name} onChange={onChangeHandler}/>
        {message.startsWith("Name ") && <p className='text-red-600 font-semibold text-xs'>{message}</p>}
        <label htmlFor="username">Email</label>
        <input  className='text-black px-2 text-sm border h-12  border-black' type="email" name="username" id="username" value={user.username} onChange={onChangeHandler}/>
        {message.startsWith("Enter")  && <p className='text-red-600 font-semibold text-xs'>{message}</p>}
        <label htmlFor="password">Password</label>
        <input  className='text-black px-2 text-sm border h-12 border-black' type="password" name="password" id="password" value={user.password} onChange={onChangeHandler} />
        {message.startsWith("Password " || "The ")  && <p className='text-red-600 font-semibold text-xs'>{message}</p>}
        <button type='submit' className='bg-blue-500 w-80 mx-auto text-white p-3 text-md rounded-full' onClick={onSubmit}>Register</button>
        <p className='mx-auto'>or</p>
      </form>
      <div className='flex items-center justify-center'>
        <NavLink to={'/login'}>
          <button className='bg-blue-500 w-80 font-semibold text-sm mb-3 text-white p-3 text-md rounded-full'>Login</button>
        </NavLink>
        </div>
    </div>
  )
}

export default Register
