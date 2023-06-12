import React from "react";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-2 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow=lg text-white font-bold">
          <div className="flex flex-col space-y-2 justify-around">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 pb-2 text-cyan-100 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis vulputate ligula, et gravida lorem. Nam accumsan
              </p>
            </div>

            <div className="inline-flex space-x-2 items-center">
              <MdPhone className="text-teal-300 text-xl" />
              <span>+91 8456890117</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdEmail className="text-teal-300 text-xl" />
              <span>nayakswagatika1132@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <MdLocationOn className="text-teal-300 text-xl" />
              <span>91 Sector Unit-1 Bhubaneswar</span>
            </div>

            <div className="flex space-x-4 text-lg">
              <MdFacebook />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
            <form action="" className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm ">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm ">
                  Email Address
                </label>
                <input
                  type="text"
                  placeholder="Email address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm ">
                  Message
                </label>
                <textarea
                  type="text"
                  rows="4"
                  placeholder="Message"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
              <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
