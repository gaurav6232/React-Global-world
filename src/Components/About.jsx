 import { motion } from 'framer-motion'
import React from 'react'

 
 const About = () => {
   return (
     <div className='w-full min-h-screen relative'>
      <img className='w-full h-full object-cover absolute' src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
       <div className='image w-full h-[35vw] relative'>
        <img data-scroll data-scroll-speed=".2"  className='absolute w-[30vw] h-full object-cover left-[10%] top-[-10%]' src="https://media.istockphoto.com/id/1785843235/photo/female-gamer-asian-ethnicity-playing-fps-video-game-on-computer.jpg?s=2048x2048&w=is&k=20&c=4mXwHoOtD_Ez6_skd5Us5NMHIYis3iD1iTXMxhi8-uU=" alt="" />
        <img data-scroll data-scroll-speed=".2" className='absolute right-[20%] bottom-0' src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww" alt="" />
        <img data-scroll data-scroll-speed=".6" className='absolute h-1/2 right-[13%] -bottom-[10%]' src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
       </div>
       <div className='w-full py-10 px-20 mt-32 text-black'>
        <div className='w-1/2 mx-auto'>
        <h1 className='text-7xl'> animi quibusdam assumenda perspiciatis iusto ut unde perferendis officiis consectetur fuga.</h1>
        <h4 className='text-xl opacity-50 font-light mt-10'>inter in the world </h4>
        <h4 className='text-xl opacity-50 font-light'>inter in the world </h4>
        <h4 className='text-xl opacity-50 font-light'>inter in the world </h4>
        </div>
       </div>
       <div className='marquee text-black whitespace-nowrap overflow-hidden flex top-[50%] absolute z-30'>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[13vw] text-teal-800'>see the world</motion.h1>
        <motion.h1  initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}  className='text-[13vw] ml-3 text-teal-800'>see the world</motion.h1>
       </div>
     </div>
   )
 }
 
 export default About
 