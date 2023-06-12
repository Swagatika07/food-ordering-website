import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import {BiMinus, BiPlus} from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { deleteCartItem,increaseQty,decreaseQty } from "../redux/productSlice";

const CartItem = ({ id, name, image, category, qty, total, price }) => {
    const dispatch =useDispatch()
  return (
    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
    <img src={image} className='w-20 h-20 max-w-[60px] rounded-full object-contain'/>
    
    {/*name section*/}
    <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-50'>
            {name}
        </p>
        <p className='text-sm block text-gray-300 font-semibold'>₹ {parseFloat(price)*qty}</p>
    </div>

    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <motion.div whileTap={{scale:0.75}} onClick={()=>dispatch(decreaseQty(id))}>
            <BiMinus className="text-gray-50"/>
        </motion.div>
        <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
            {qty}
        </p>
        <motion.div whileTap={{scale:0.75}} onClick={()=>dispatch(increaseQty(id))}>
        <BiPlus className="text-gray-50"/>
        </motion.div>
        <motion.div whileTap={{scale:0.75}} onClick={()=>dispatch(deleteCartItem(id))}>
        <MdClear className="text-gray-50"/></motion.div>
    </div>
    </div>
  )
}

export default CartItem
