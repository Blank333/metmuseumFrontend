import React, { useState } from "react";
import logo from "../images/logo.png";
import {
  BookmarksOutlined,
  ExpandMore,
  Menu,
  MenuBook,
  PermIdentity,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='p-2 text-gray-800 lg:h-28 font-medium '>
      <div className='flex container m-auto'>
        <div className='flex justify-between w-full lg:w-auto lg:mr-10'>
          <Link to='/'>
            <img
              src={logo}
              alt='The Metropolitan Museum of Art'
              className='h-20'
            />
          </Link>
          <button
            onClick={toggleMenu}
            className='p-2 text-gray-800 focus:outline-none lg:hidden'
          >
            <Menu />
          </button>
        </div>

        <ul className='lg:flex-row flex-col justify-between items-center h-full container m-auto lg:flex hidden'>
          <li className='hover:underline '>
            <Link to='#about'>Categories</Link>
            <ExpandMore />
          </li>
          <li className='hover:underline '>
            <Link href='#contact'>Deals</Link>
          </li>
          <li className='hover:underline '>
            <Link href='#contact'>What's New</Link>
          </li>
          <li className='hover:underline '>
            <Link href='#contact'>Delivery</Link>
          </li>
          <li className='hover:underline'>
            <input
              className='rounded-3xl px-4 py-2 bg-gray-100 placeholder:text-gray-500'
              type='search'
              placeholder='Search Product'
            />
            <Search className='relative right-8 text-gray-500' />
          </li>
          <li className='hover:underline '>
            <Link href=''>
              <PermIdentity className='relative bottom-[3px] right-1' />
              Account
            </Link>
          </li>
          <li className='hover:underline '>
            <BookmarksOutlined className='relative bottom-[3px] right-1' />
            <Link href=''>Bookmarks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
