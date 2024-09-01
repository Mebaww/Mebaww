import React from 'react'

function NavBar({name, Icon}) {
  return (
    <div className='text-white flex items-center gap-2 text-2xl cursor-pointer hover:underline underline-offset-8 mb-3 '>
   <Icon/>
   <h2 className=''>{name}</h2>
    </div>
  )
}

export default NavBar