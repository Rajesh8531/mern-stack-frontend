import React, { useEffect, useState } from 'react'
import Leftbar from './Leftbar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import { useLoaderData,useLocation  } from 'react-router-dom'

export async function loader(){

  return  await fetch('https://linkedin-clone-backend-lol0.onrender.com/post').then(res => res.json()).then(data => data)

}

function Index() {

  
  let data = useLoaderData()
  data.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  let [isClicked,setIsClicked] = useState(false)
  let location = useLocation()
  return (
    <div className={'flex w-[65%] mx-auto  justify-between gap-4 ' }>
        <Leftbar data = {location.state && location.state.data} isClicked={setIsClicked} bool={isClicked} />
        <Feed data={location.state && location.state.data} posts = {data} info={isClicked} fn={setIsClicked} />
        <Rightbar bool={isClicked} />
    </div>
  )
}

export default Index
