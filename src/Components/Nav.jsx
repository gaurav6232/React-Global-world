 import React from 'react'
 9
 const Nav = () => {
   return (
     <div className='w-full px-20 py-10 flex justify-between items-center fixed top-0 z-[999] '>
      <div className='logo text-sm font-regular capitalize text-slate-50 rounded-lg w-20 h-8 items-center flex justify-center bg-slate-500 '>
        Nav
      </div>
     <div className='link flex gap-10'>
      {["work", "stodio", "news", "Contact"].map((item, index) =><a key={index} className='text-sm font-regular capitalize text-slate-50 rounded-lg w-20 flex justify-center bg-slate-500'>{item}</a> )}
     </div>
     </div>
   )
 }
 
 export default Nav
 