import React from 'react'

function FeedIcon(props) {

  let {Icon,text,style,size} = props;
    
  return (
    <div className='flex gap-2 items-center justify-center text-[14px] hover:bg-slate-200 cursor-pointer py-3 px-3 rounded-md'>
      <Icon className={style} sx={{fontSize:size}} />
      <p className='font-semibold text-stone-500'>{text}</p>
    </div>
  )
}

export default FeedIcon
