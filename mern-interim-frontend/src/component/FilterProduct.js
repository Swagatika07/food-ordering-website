import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { IoFastFood } from "react-icons/io5";
import { motion } from "framer-motion";
const FilterProduct = ({ category,onClick}) => {
  return (
    <motion.div 
    whileTap={{ scale: 0.75 }}
    onClick={onClick}>
      <div className="text-3xl p-5  rounded-full cursor-pointer bg-yellow-500">
        <CiForkAndKnife />
      </div>
      <p className="text-center font-medium my-1 capitalize">{category}</p>
    </motion.div>
    // <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
    //   <motion.div
    //     whileTap={{ scale: 0.75 }}
    //     className="bg-cartNumBg w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg"
    //   >
    //     <div
    //       className="w-10 h-10 rounded-full shadow-lg
              
    //              bg-white"
    //     >
    //       <IoFastFood className="text-textColor" />
    //     </div>
    //     <p className="text-smtext-white">{category}</p>
    //   </motion.div>
    // </div>
  );
};

export default FilterProduct;
