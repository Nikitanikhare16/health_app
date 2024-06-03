import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.jpg'
import React from 'react'
const MenuBar:React.FC<{buttonArr:any}> = ({buttonArr })=>{
    const buttoncontent = buttonArr.map((bt:any)=>{
return(
/* <button key={bt.id} className='text-black' onClick={()=>{bt.btFun()}}>{bt.label}</button> */

/* <NavLink to = {bt.path} >{bt.label}</NavLink> */
<NavLink
  to={bt.path}
  className={({ isActive}) =>
   isActive ? "text-green-500" : "text-black"
  }
>
{bt.label}
</NavLink>


);
    })
    return(
        <div className="flex justify-between items-center bg-emerald-300 p-3">
<div className='flex space-x-6'>
    <img src={logo} alt="logo" className="h-14 w-14"></img>
   {buttoncontent}
</div>
<button className='text-black'>LogIn</button>
        </div>
    )
}
export default MenuBar
