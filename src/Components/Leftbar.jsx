import React, { useState } from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Leftbar({data,isClicked,bool}) {
  let navigate = useNavigate()
  let [string,setString] = useState()

  useEffect(()=>{
    if(!data){
      navigate('/')
    }
    // fetch(`http://localhost:3000/getuser/${data.username}`)
    // .then(res=>res.json()).then(data_=>setString(data_.STRING))

  },[])
  
  return (
    <div className={'flex flex-col ' + (bool && ' opacity-30')}>
    <div className={'bg-white w-[220px] flex flex-col h-auto rounded-lg relative border '}>
        {string ? <img src={string} className='absolute top-8 left-[70px] rounded-full' width={70} height={70} /> : <div className='absolute bg-slate-200 rounded-full w-16 h-16 top-8 left-[70px] flex items-center justify-center cursor-pointer'>
             <CameraAltIcon onClick={()=>{isClicked(true)}} sx={{fontSize:40}} />
        </div>}
      <div className='flex flex-col '>
        <div className='bg-gray-300 h-16 rounded-t-lg'></div>
        <div className='h-32 flex flex-col justify-end pb-6 items-center gap-1 text-md border-b'>
            <p className='font-bold text-sm hover:underline cursor-pointer' >Welcome, {data && data.fullname}</p>
            <p className='font-semibold text-xs hover:underline text-blue-600 cursor-pointer' onClick={()=>{isClicked(true)}}>Add a photo</p>
        </div>
        <div className='flex flex-col items-start justify-center h-16 text-xs relative border-b cursor-pointer '>
            <PersonAddIcon  className='absolute top-4 right-2 '/>
            <div className='flex flex-col py-1 w-full hover:bg-gray-300 font-medium pl-2'>
                <p className='text-slate-500' >Connections</p>
                <p >Connect with alumni</p>
            </div>
        </div>
        <div className='h-16 border-b flex flex-col text-xs px-2 items-center justify-center cursor-pointer hover:bg-gray-300 gap-2'>
          <p className='text-gray-500 font-normal'>Access exclusive tools &amp; insights</p>
          <p className='font-bold text-xs underline'>Try premium for free</p>
        </div>
        <div className='flex h-12 items-center hover:bg-gray-300 rounded-b-lg cursor-pointer w-full px-5'>
          <TurnedInIcon sx={{fontSize:22,color:'gray'}}/>
          <p className='text-xs font-bold'>My items</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col text-xs border bg-white mt-4 relative justify-center rounded-lg'>
        <div className='flex flex-col gap-4 text-blue-600 font-bold text-xs border-b p-2'>
          <p className='hover:underline cursor-pointer'>Groups</p>
          <p className='hover:underline cursor-pointer'>Events</p>
          <p className='hover:underline cursor-pointer'>Followed Hastags</p>
          <AddIcon sx={{fontSize:20}} className='absolute top-10 right-2 hover:bg-gray-300 rounded-full text-gray-700 cursor-pointer' />
        </div>
        <div className='flex items-center justify-center hover:bg-gray-300 h-12 text-[13px] text-gray-600 font-bold cursor-pointer'>Discover more</div>
      </div>
    </div>
  )
}

export default Leftbar
