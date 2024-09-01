    import React, { useState } from 'react'
    import logo from '../assets/img/logo.png'
    import avatar from '../assets/img/avatar.png'
    import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
    } from 'react-icons/hi2'
    import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import NavBar from './NavBar'
    function Header() {
        const [toggle, setToggle] = useState(false)
        const menu=[
            {
                name: "Home",
                icon: HiHome
            },
            {
                name: "Search",
                icon: HiMagnifyingGlass
            },
            {
                name: "Watch List",
                icon: HiPlus
            },
            {
                name: "Originals",
                icon: HiStar
            },
            {
                name: "Movies",
                icon: HiPlayCircle 
            },
            {
                name: "Series",
                icon: HiTv
            }
         
        ]
    return (
        <div className='flex justify-between items-center p-5'>
            <div className='flex gap-10 '>
            <img src={logo} alt="logo" className='w-[80px] md:w-[130px] object-cover'/>
        <div className='gap-8 hidden md:flex items-center'>
        {menu.map((item)=>(
            <NavBar name={item.name} Icon={item.icon}/>  
        ))}
        </div>
        <div className='flex md:hidden gap-8 items-center'>
        {menu.map((item, index)=>index<3&&(
            <NavBar name={''} Icon={item.icon}/>  
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <NavBar name={''} Icon={HiDotsVertical}/>
            {toggle ? <div className='absolute mt-1 border-[1px] border-gray-700 rounded-lg bg-[#121212] px-5 py-4'>
            {menu.map((item, index)=>index>2&&(
            <NavBar name={item.name} Icon={item.icon}/>  
        ))}
            </div> :null}
          
           </div>
        </div>
          
            </div>

      

        <img src={avatar} alt="avatar" className='md:w-[50px] w-[35px] top-0' />
   
        </div>

    )
    }

    export default Header
