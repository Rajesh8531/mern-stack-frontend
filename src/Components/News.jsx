import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function News({text,time}) {
  
  let prevDate = new Date(time)
  let currentDate = new Date()
  let hours = parseFloat(Math.abs(currentDate - prevDate) / 36e5).toFixed(6)
  let mins = parseFloat(hours * 60).toFixed(0)
  let day = hours / 24
  let timeString = day > 1 ? `${Math.round(day)}d ago` : (hours > 1) ? `${Math.round(hours)}h ago` : (mins > 1) ? `${mins}m ago` : 'just now'
  return (
    <div className='flex flex-col text-sm font-semibold gap-[2px] cursor-pointer hover:bg-[#d1d1d0] pl-3 py-1 px-2'>
        <div className='flex justify-center gap-1' ><FiberManualRecordIcon  sx={{fontSize:18,paddingTop:1}} /> 
        <p>{text}</p> </div>
        <p className='text-xs text-gray-500 font-thin pl-6'>{timeString}</p>
    </div>
  )
}

export default News
