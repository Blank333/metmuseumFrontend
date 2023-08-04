import React from "react";
import logo from "../images/logo.png";
import {
  BookmarksOutlined,
  ExpandMore,
  PermIdentity,
  Search,
} from "@mui/icons-material";

function Navbar() {
  return (
    <nav className='p-2 text-gray-800 h-28 font-medium'>
      <ul className='flex justify-between items-center h-full container m-auto '>
        <li className='hover:underline'>
          <a
            href='https://metmuseum.github.io/'
            target='_blank'
            rel='noopener noreferrer '
          >
            <img
              src={logo}
              alt='The Metropolitan Museum of Art'
              className='h-20'
            />
          </a>
        </li>
        <li className='hover:underline '>
          <a href='#about'>Categories</a>
          <ExpandMore />
        </li>
        <li className='hover:underline '>
          <a href='#contact'>Deals</a>
        </li>
        <li className='hover:underline '>
          <a href='#contact'>What's New</a>
        </li>
        <li className='hover:underline '>
          <a href='#contact'>Delivery</a>
        </li>
        <li className='hover:underline '>
          <input
            className='rounded-3xl px-4 py-2 bg-gray-100 placeholder:text-gray-500'
            type='search'
            placeholder='Search Product'
          />
          <Search className='relative right-8 text-gray-500' />
        </li>
        <li className='hover:underline '>
          <a href=''>
            <PermIdentity className='relative bottom-[3px] right-1' />
            Account
          </a>
        </li>
        <li className='hover:underline '>
          <BookmarksOutlined className='relative bottom-[3px] right-1' />
          <a href=''>Bookmarks</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
