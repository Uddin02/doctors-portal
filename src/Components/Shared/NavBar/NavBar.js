import { Transition } from "@headlessui/react";
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();
    const menuItems = <React.Fragment>
        <Link className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/">Home</Link>
        <Link className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/appointment">Appointment</Link>
        <Link className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/about">About</Link>
        <Link className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/reviews">Reviews</Link>
        <Link className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" to="/login">Login</Link>
    </React.Fragment>
    
    const menuItemsForMobile = <React.Fragment>
        <Link className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/">Home</Link>
        <Link className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/appointment">Appointment</Link>
        <Link className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/about">About</Link>
        <Link className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/reviews">Reviews</Link>
        <Link className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/login">Login</Link>
    </React.Fragment>
    
    return (
        <div>
      <nav className="bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
            <div className="flex items-center justify-around" >
              
              <div className="hidden md:block">
                <div className="ml-10 flex  items-baseline space-x-4">
                    {menuItems}    
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="  inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-slate-900   "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >         
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItemsForMobile}
              </div>
            </div>
        </Transition>
      </nav>    
    </div>
    );
};

export default NavBar;