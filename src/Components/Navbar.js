import React from "react";
import logo from "../images/logo.png";
import {
  BookmarksOutlined,
  ExpandMore,
  PermIdentity,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='p-2 text-gray-800 h-28 font-medium'>
      <ul className='flex justify-between items-center h-full container m-auto '>
        <li className='hover:underline'>
          <Link to='/'>
            <img
              src={logo}
              alt='The Metropolitan Museum of Art'
              className='h-20'
            />
          </Link>
        </li>
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
        <li className='hover:underline '>
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
    </nav>
  );
}

export default Navbar;
