import React, { useEffect, useState } from 'react'
import c1 from '../images/c1.png';
import NotFound from '../images/NotFound.svg';
import { MdShoppingBasket } from 'react-icons/md';
import {motion} from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const RowContainer = ({flag,data}) => {
  
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = (item) => {
    
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    // console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(()=>{
    addtocart()
  },[items])
  return (
    <div
    className={`w-full flex items-center gap-3 my-12 bg-rowBg scroll-smooth
    ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>
    {data && data.length>0 ? (
      data.map((item)=> (
    <div key={item.id} className='w-275 min-w-[300px] md:min-w-[340px] my-12 md:w-340 h-[225px] bg-white rounded-lg p-2
    backdrop-blur-lg flex flex-col items-center justify-evenly relative'>
    <div className='w-full flex items-center justify-between'>
    <motion.img
    whileHover={{scale:1.2}} src={item.img} alt="food" className='w-32 -mt-8 drop-shadow-2xl'/>
    <motion.div 
    whileTap={{ scale:0.75}}className='w-10 h-10 rounded-full bg-red-600 flex items-center justify-center
    cursor-pointer hover:shadow-lg' onClick={()=>setItems([...cartItems,item])}>
    <MdShoppingBasket className='text-white'/>
    </motion.div>
    </div>

    <div className='w-full flex flex-col gap-1 items-end justify-end'>
    <p className='text-textColor font-semibold text-base md:text-lg'>
    {item.name}
    </p>
    <p className='mt-2 text-sm text-gray-500'>{item.calories} Calories</p>
    <div className='flex items-center gap-8'>
    <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-red-500'>Rs</span>{item.price}</p>
    </div>
    </div>
    </div>
      ))
    ): (<div className="w-full flex flex-col items-center justify-center">
    <img src={NotFound} className="h-340" />
    <p className="text-xl text-headingColor font-semibold my-2">
      Items Not Available
    </p>
  </div>)}
    </div>
      
  )
}

export default RowContainer
