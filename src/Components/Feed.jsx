import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from './FeedIcon';
import FeedPost from './FeedPost';
import Post from './Post';
import AddPic from './AddPic';


function Feed({data,posts,info,fn}) {

  let elements = posts.map((item,index) => (
    <FeedPost data={item} key={index}  />
  ))

  let [clicked,setClicked] = useState(false)

  return (
    <>
    <div  className={' flex flex-col relative w-[80%] ' + (info && " opacity-30")}>
    <div className='flex flex-col bg-white border h-[130px] rounded-lg '>
      <div className='flex  h-auto justify-between items-center gap-3 p-3  rounded-xl'>
        <AccountCircleIcon sx={{fontSize:52}} className='cursor-pointer' />
        <div onClick={()=>{setClicked(true)}} type="text" className='w-full flex item-center h-12 rounded-full border-[1px] border-gray-500 text-md pl-4 pt-3 text-gray-600 font-semibold hover:bg-slate-100 cursor-pointer' > start a post</div>
      </div>
      <div className='flex justify-between items-center px-10'>
        <FeedIcon Icon={PermMediaIcon} text={'Media'} style={'text-[#378fe9]'} size={25} />
        <FeedIcon Icon={CalendarMonthIcon} text={'Event'} style={'text-[#c37d16]'} size={25}/>
        <FeedIcon Icon={NewspaperIcon} text={'Write Article'} style={'text-[#e16745]'} size={25}/>
      </div>
    </div>
    <div className='bg-gray-400 h-[1px] w-full my-3'></div>
    <div className='flex flex-col gap-3'>
    {posts && elements}
    </div>
    {clicked && <div className={' absolute top-0 left-[1px] bg-gray-300 shadow-black shadow-xl' }><Post data = {data} click={setClicked} isClicked={clicked} /></div>}
    </div>
    {info && <div className='absolute top-[73px] z-50 left-[35%]'>
       <AddPic data={data} isClicked={ fn}/>
    </div>}
    </>
  )
}

export default Feed
