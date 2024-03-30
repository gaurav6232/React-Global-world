 import { motion } from 'framer-motion'
import React from 'react'
 
 const Data = () => {
   return (
     <div className='w-full h-[100vh] py-10'>
      <img className='w-full h-[100vh] object-cover absolute' src="https://images.unsplash.com/photo-1563796021847-59711ad1dbd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxnYW1pbmd8ZW58MHx8MHx8fDA%3D" alt="" />
        <div className='w-1/2 mx-auto text-slate-800'>
            {['Name', 'Manish', 'Yang', 'Confident'].map((i, index) =>{
                return <div className='master overflow-hidden'>
                <motion.h1
                 initial={{y: "100%", opacity: 0,  }}
                 whileInView={{y: 0, opacity: 1, }}
                  transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className='text-[12vw] leading-none tracking-tight flex items-center'>
                    {index === 2 && (<span className='inline-block w-32 h-5 mt-10 bg-slate-500'></span>)}
                    {i}
                    </motion.h1>
                 </div>
            })}
             
        

        {/* <h1 className='text-[12vw] flex items-center leading-[11vw] tracking-tight'><span className='inline-block w-32 h-5 mt-10 bg-slate-500'></span>Yang</h1>
        <h1 className='text-[12vw] leading-none tracking-tight'>Confident</h1>
         */}

        </div>
         
     </div>
   )
 }
 
 export default Data
 