import React from 'react'

function HeaderIcon(props) {
    let {Icon,text,size,style} = props
  return (
    <div className={style + ' flex flex-col items-center justify-center'} >
      <Icon sx={{fontSize:size}}/>
      <p>{text}</p>
    </div>
  )
}

export default HeaderIcon
