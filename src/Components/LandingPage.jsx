import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-[200vh] relative overflow-hidden bg-zinc-900'>
         

       <img data-scroll data-scroll-speed="-1.2" className='w-full h-full object-cover opacity-80' src="https://images.unsplash.com/photo-1708844897353-649da595a3f2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       <div className='container ml-20 w-full h-full absolute  top-[10%] left-0'>
        <div className='maintext'>
        <h1 className='text-[10vw] leading-none tracking-tight font-regular text-slate-400'>creating</h1>
        <h1 className='text-[10vw] leading-none tracking-tight font-regular text-slate-400'>Does</h1>
        <h1 className='text-[10vw] leading-none tracking-tight font-regular text-slate-400'>motion</h1>
        <p className='mt-7 text-teal-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, autem.</p>
        </div>
        <p className='text-3xl w-[50vw] font-light  absolute right-[10%] bottom-[40%] leading-[2.3vw] text-teal-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias vitae sapiente! Sapiente voluptates odio architecto, illo ab quo possimus tempore minus mollitia dolorem optio itaque amet sit magni nihil quaerat deserunt.</p>

       </div>
   
    </div>
  )
}

export default LandingPage
