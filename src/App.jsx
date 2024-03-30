import React from 'react'
import Nav from './Components/Nav'
import LandingPage from './Components/LandingPage'
import LocomotiveScroll from 'locomotive-scroll';
import About from './Components/About';
import Data from './Components/Data';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen   font-["TWK Lausanne"]'>
      <Nav/>
      <LandingPage/>
      <About/>
      <Data/>
    </div>
  )
}

export default App
