import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import WorkIcon from '@mui/icons-material/Work';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HeaderIcon from './HeaderIcon';
import AppsIcon from '@mui/icons-material/Apps';
import { Outlet } from 'react-router-dom';
import { NavLink,useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

function Header() {

    let size = 26
    let style = " text-xs text-gray-500 hover:text-black cursor-pointer border-b-2 border-white active:border-black h-full py-0  px-2 "

    let location = useLocation()
    let navigate = useNavigate()
    useEffect(()=>{
        if(!location.state){
            navigate('/')
        } 
        window.addEventListener('popstate',()=>{
            navigate("/")
           })
    },[])

  return (
    <div className='flex flex-col relative'>
        <div className='flex sticky top-0 z-10 h-[50px] w-full border border-b items-center justify-center px-40 text-md py-0 bg-white mb-6'>
        <div className='flex w-[520px] '>
            <LinkedInIcon sx={{fontSize : 44}} className='text-[#0A66C2]'/>
            <div className='flex bg-[#edf3f8] my-1 items-center justify-center px-4 gap-x-2 '>
                <SearchIcon sx={{fontSize:20}}/>
                <input type="text" className='outline-none bg-[#edf3f8] w-[300px] font-thin focus:w-[400px] text-sm' placeholder='Search '  />
            </div>
        </div>
        <div className='flex items-center justify-evenly gap-x-2 px-6 border-r h-full'>
            <HeaderIcon Icon={HomeIcon} text={'Home'}  size ={size} style={style } />
            <HeaderIcon Icon={Groups2Icon} text={'MyNetwork'}  size ={size} style={style} />
            <HeaderIcon Icon={WorkIcon} text={'Jobs'}  size ={size} style={style} />
            <HeaderIcon Icon={TextsmsIcon} text={'Messaging'}  size ={size} style={style} />
            <HeaderIcon Icon={NotificationsActiveIcon} text={'Notifications'}  size ={size} style={style} />
            <HeaderIcon Icon={AccountCircleIcon} text={'Me'}  size ={size} style={style} />
            <NavLink to={'/'}><HeaderIcon Icon={LogoutIcon} text={'Logout'}  size ={size} style={style} /></NavLink>
        </div>
        <div className='flex items-center justify-center col-span-1'>
            <HeaderIcon Icon={AppsIcon} text={'For Business'} size={size} style={style} />
            <p className='text-xs text-center w-24 text-[#915907] underline ml-4'>Try Premium for free</p>
        </div>
        </div>
        <Outlet />
    </div>
  )
}

export default Header
