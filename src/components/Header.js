import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header classNameName="text-gray-600 body-font">
        <div
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          bis_skin_checked="1"
        >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              ClassName="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={'/'}><span className="ml-3  text-blue text-xl">SimpyShop</span></Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-500 cursor-pointer">Products</a>
            <a className="mr-5 hover:text-gray-500 cursor-pointer">About us</a>
            <Link to={'/Contact'}><a className="mr-5 hover:text-gray-500 cursor-pointer">Contacts</a></Link>
          </nav>
        <Link to={'/Cart'} ><button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-white text-base mt-4 md:mt-0">
            Cart
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              ClassName="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button></Link> 
        </div>
      </header>
    </div>
  );
};

export default Header;
