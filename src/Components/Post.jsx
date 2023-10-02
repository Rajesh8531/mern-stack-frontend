import React, { useState,useEffect } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useReducer } from 'react';

function Post({data,click}) {

  let [post,setPost] = useState({
    content : '',
  })

  let [message,setMessage] = useState('')


  function onSubmit(event){
    event.preventDefault()
    if(post.content.length < 15){
      setMessage("Post must have more than 15 characters.")
    } else {
      fetch('https://linkedin-clone-backend-lol0.onrender.com/post',{
      method:'POST',
      body : JSON.stringify({post : post.content,
                             fullname : data.fullname,
                            photo:''}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then(res => res.json()).then(res=>{
      if(res.message == "RECEIVED"){
        click(false)
        window.location.reload()
        //  navigate('/main',{state:{data:data}})
      }
    })
    }   
  }

  function onChangeHandler(event){
    setPost(prev => ({
      ...prev,
      [event.target.name] : event.target.value
    }))
  }

  return (
    <div className={'relative h-[400px] w-[600px] flex gap-3 flex-col p-4 border bg-white shadow-xl shadow-gray-500' }>
      <CancelIcon onClick={()=>{click(false)}} className='absolute right-4 cursor-pointer hover:shadow-md rounded-full hover:shadow-black' sx={{fontSize:30}} />
      <p className='hover:bg-gray-300 w-40 p-2 rounded-md text-md font-semibold'><AccountCircleIcon sx={{fontSize:40}} /> { data.fullname}</p>
      <form className='flex flex-col'>
        <textarea className='outline-none text-sm font-medium text-gray-700 px-2 border shadow-md' name="content" id="content" value={post.content} onChange={onChangeHandler} cols="30" rows="10" placeholder='Start typing...'></textarea>
        <button onClick={onSubmit} className='absolute bottom-4 right-8 border px-4 hover:shadow-md py-2 bg-[#0A66C2] rounded-full text-white font-bold '>Post</button>
      </form>
      <p className='text-red-500 text-xs font-semibold'>{message && message}</p>
    </div>
  )
}

export default Post
