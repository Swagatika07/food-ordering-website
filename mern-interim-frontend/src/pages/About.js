import React from 'react'
import girlCoder from '../images/girlCoder.jpg'
import mentor from '../images/mentor.jpg'
import technicalTrainer from '../images/technicalTrainer.jpg'
const About = () => {
  return (
    <div className='font-Poppins bg-darkPurple text-white'>
    <div className='text-center py-10'>
    <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">About Us</h1>
    <div className='flex max-w-5xl gap-8 mx-auto group'>
       <div className='bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-normal'>
        <img className="h-150 mx-auto mb-2 rounded-full" src={girlCoder} alt="girlFounderImage"/>
        <h4 className='uppercase text-xl font-bold'>Swagatika</h4>
        <h1>Programmer</h1>
        <p className='text-sm leading-7 my-3 font-light opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce quis vulputate ligula, et gravida lorem. Nam accumsan</p>
        <button className='bg-btnPrimary py-2.5 px-8 rounded-full'>get in touch</button>
       </div>
       <div className='bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-normal'>
        <img className="h-150 mx-auto mb-2 rounded-full" src={technicalTrainer} alt="girlFounderImage"/>
        <h4 className='uppercase text-xl font-bold'>Krishna</h4>
        <h1>Technical Trainer</h1>
        <p className='text-sm leading-7 my-3 font-light opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce quis vulputate ligula, et gravida lorem. Nam accumsan</p>
        <button className='bg-btnPrimary py-2.5 px-8 rounded-full'>get in touch</button>
       </div>
       <div className='bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-normal'>
        <img className="h-150 mx-auto mb-2 rounded-full" src={mentor} alt="girlFounderImage"/>
        <h4 className='uppercase text-xl font-bold'>Ismail</h4>
        <h1>Mentor</h1>
        <p className='text-sm leading-7 my-3 font-light opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce quis vulputate ligula, et gravida lorem. Nam accumsan</p>
        <button className='bg-btnPrimary py-2.5 px-8 rounded-full'>get in touch</button>
       </div>
    </div>
    </div>
     
    </div>
  )
}

export default About;
