import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

  let [user,setUser] = useState({
    username:'',
    password:''
  })

  let navigate = useNavigate()

  let [message,setMessage] = useState('')

  function onSubmit(e){
    e.preventDefault()
    if(!user.username.endsWith('.com')){
      setMessage("Please enter a valid email.")
    } else if(user.password.length == 0){
      setMessage(" Please enter your password")
    }
    else{
      fetch("https://linkedin-clone-backend-lol0.onrender.com/login",{
        method:'post',
        body:JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }).then(res=>{
        if(res.statusText == 'Unauthorized'){
          setMessage('The given details are not found. Please check email or password.')
        }
        return res.json()}).then(data=>{
        if(data.message==true){
          navigate("/main",{state:data})
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
        <label htmlFor="username">Email</label>
        <input className='px-3 text-sm text-black border h-12  border-black' type="email" name="username" id="username" value={user.username} onChange={onChangeHandler}/>
        {message.startsWith("Please") && <p className='text-xs font-semibold text-red-600'>{message}</p>}
        <label htmlFor="password">Password</label>
        <input className='px-3 text-sm text-black border h-12 border-black' type="password" name="password" id="password" value={user.password} onChange={onChangeHandler} />
        {message.startsWith(" Please") && <p className='text-xs font-semibold text-red-600'>{message}</p>}
        {message.startsWith("The") && <p className='text-xs font-semibold text-red-600'>{message}</p>}
        <button className='bg-blue-500 w-80 mx-auto text-white p-3 text-md rounded-full' onClick={onSubmit}>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
