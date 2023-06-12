import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout, MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "../images/Logo.png";
import Avatar from "../images/6769264_60111 (1).jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const navigate=useNavigate();
  
  const dispatch = useDispatch();
  // console.log(userData);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    alert("Logged out successfully");
    navigate("/")
  };
  const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-24 px-2 md:px-4 z-50 bg-white">
      {/* desktop and tablet 
    className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary"*/}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
        <Link to="/">
          <img src={Logo} className="w-12 object-cover" alt="logo" /></Link>
          <p className="text-headingColor text-xl font-bold">HotPot</p>
        </div>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="menu">Menu</Link>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="about">About Us</Link>
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to="contact">Contact</Link>
            </li>
          </motion.ul>
          <Link to="cart">
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">{cartItemNumber.length}</p>
            </div>
          </div>
          </Link>

          <div className="relative" onClick={handleShowMenu}>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={userData.image ? userData.image : Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
            />
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {userData.email === process.env.REACT_APP_ADMIN_MAIL && (
                  <Link to={"newproduct"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer
    hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                {userData.email ? (
                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer
hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={handleLogout}
                  >
                    LogOut
                    <MdLogout />
                  </p>
                ) : (
                  <Link to={"login"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer
    hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                    >
                      LogIn
                      <MdLogin />
                    </p>
                  </Link>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
      <Link to="cart">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />

          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">{cartItemNumber.length}</p>
          </div>
        </div>
        </Link>
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">HotPot</p>
        </div>
        <div className="relative" onClick={handleShowMenu}>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
          />
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {userData.email === process.env.REACT_APP_ADMIN_MAIL && (
                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer
    hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  New Item
                  <MdAdd />
                </p>
              )}

              <ul className="flex flex-col">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-500 px-4 py-2">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-500 px-4 py-2">
                  Menu
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-500 px-4 py-2">
                  About Us
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-500 px-4 py-2">
                  Service
                </li>
              </ul>

              {userData.email ? (
                <p
                  className="m-2 p-2 rounded-md shadow-lg flex items-center gap-3 cursor-pointer
    hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base justify-center
     bg-gray-200"
                  onClick={handleLogout}
                >
                  LogOut
                  <MdLogout />
                </p>
              ) : (
                <Link to={"login"}>
    
                  <p
                    className="m-2 p-2 rounded-md shadow-lg flex items-center gap-3 cursor-pointer
  hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base justify-center
   bg-gray-200"
                  >
                    Login
                    <MdLogin />
                  </p>
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
