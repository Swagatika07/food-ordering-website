import React from 'react'
import Delivery from '../images/delivery.png';
import orderNow from '../images/orderNow.gif';
const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 w-full bg-white p-4 md:grid-cols-2 gap-2 id="home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
      <div className='flex items-center gap-2 bg-orange-200 px-2 py-1 rounded-full justify-center'>
      <p className='text-base text-yellow-900 font-semibold'>Fast Delivery</p>
      <div className='w-8 h-8 rounded-full overflow-hidden bg-white'>
      <img 
       src={Delivery} 
       className='w-full h-full object-contain drop-shadow-xl' 
       alt="delivery"/>
      </div>
      </div>

      <p className='text-[2.5rem] md:text-[4rem] font-bold text-headingColor'>The Fastest Delivery to <span className='text-orange-500'>Your Location</span></p>
      <p className='text-base text-textColor text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Fusce quis vulputate ligula, et gravida lorem. Nam accumsan
        sodales magna eget ullamcorper. Cras id viverra enim.  
      </p>

      <button type="button" className='bg-yellow-500 w-full p-4 px-4 py-2 md:w-auto rounded-lg hover:shadow-lg
      transition-all ease-in-out duration-100'>Order Now</button>
      </div>
      <div className='hidden p-4 md:flex lg:w-460 lg:h-375 md:w-full md:h-auto ml-auto'>
      <img src={orderNow} alt="motion-pic" className=''/>
      </div>
    </section>
  )
}

export default HomeContainer