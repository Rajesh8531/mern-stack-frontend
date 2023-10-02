import React, { useEffect, useState } from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import News from './News';

function Rightbar({bool}) {

  let [data,setData] = useState()


  useEffect(()=>{
    fetch("http://newsapi.org/v2/top-headlines?country=us&category=technology&apikey=4fbf08e802c44597af3284a59afed20a").then(res=>res.json()).then(data=>setData(data))
  },[])

  let elements = data && data.articles.slice(0,10).map((item,index) => ( <News key={index} text={item.title} time={item.publishedAt} />))


  return (
    <div className={'bg-white border rounded-lg  w-[600px] flex flex-col gap-2 h-[800px] '+(bool && ' opacity-30')}>
      <div className='flex items-center justify-between mb-2 p-3'>
        <p className='font-semibold '>LinkedIn News</p>
        <ErrorOutlineIcon />
      </div>
        {elements}
    </div>
  )
}

export default Rightbar
