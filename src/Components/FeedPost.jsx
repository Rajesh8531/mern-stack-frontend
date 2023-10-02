import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import LoopIcon from '@mui/icons-material/Loop';
import SendIcon from '@mui/icons-material/Send';

function FeedPost({data}) {

let prevDate = new Date(data.createdAt)
let currentDate = new Date()
let hours = parseFloat(Math.abs(currentDate - prevDate) / 36e5).toFixed(6)
let mins = parseFloat(hours * 60).toFixed(0)
let day = hours / 24
let timeString = day > 1 ? `${Math.round(day)}d` : (hours > 1) ? `${Math.round(hours)}h` : (mins > 1) ? `${mins}m` : 'just now'
  return (
    <div className='flex flex-col bg-white rounded-lg border'>
      <div className='flex p-2 items-center justify-start gap-3'>
        <AccountCircleIcon sx={{fontSize:48}}/>
        <div className='flex flex-col'>
            <p className='text-sm font-semibold'>{data.fullname}</p>
            {/* <p className='text-xs text-gray-500'>@ civo, founder @WeMakeDevs YouTuber</p> */}
            <p className='text-xs text-gray-500'>{timeString} <FiberManualRecordIcon sx={{fontSize:2}} /> <PublicIcon sx={{fontSize:14}} /></p>            
        </div>
      </div>
      <p className='p-2 text-sm font-normal border-b '>{data.post}</p>
      {/* <img src="src\assets\sample.jpg" className='h-80' /> */}
      <div className='flex flex-col px-3 py-2'>
        {/* <div className='flex justify-between items-center text-xs text-gray-500 border-b pb-3'>
            <ThumbUpIcon sx={{fontSize:17}}/>
            <p>123 comments  <FiberManualRecordIcon sx={{fontSize:2}} /> 12 repost</p>
        </div> */}
        <div className='flex gap-3 justify-between items-center'>
            <p className='hover:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer mt-1 text-sm font-semibold text-gray-500 '><ThumbUpOffAltIcon sx={{fontSize:25}}/> Like</p>
            <p className='hover:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer mt-1 text-sm font-semibold text-gray-500 '><CommentIcon sx={{fontSize:25}}/> Comment</p>
            <p className='hover:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer mt-1 text-sm font-semibold text-gray-500 '><LoopIcon sx={{fontSize:25}}/> Repost</p>
            <p className='hover:bg-gray-200 rounded-sm px-4 py-2 cursor-pointer mt-1 text-sm font-semibold text-gray-500 '><SendIcon sx={{fontSize:25}}/> Send</p>
        </div>
      </div>
    </div>
  )
}

export default FeedPost
