import React, { useState } from "react";
import logo from "../images/logo.png";
import {
  BookmarksOutlined,
  ExpandMore,
  Menu,
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
    <nav className='p-2 text-gray-800 lg:h-28 font-medium bg-white '>
      <div className='flex container m-auto'>
        <div className='flex justify-between w-full lg:w-auto lg:mr-10'>
          <Link to='/'>
            <img
              src={logo}
              alt='The Metropolitan Museum of Art'
              className='h-20'
            />
          </Link>
        </div>
        <div>
          <button
            onClick={toggleMenu}
            className={`p-2 text-gray-800 focus:outline-none lg:hidden ${
              isMenuOpen ? "translate-x-32" : ""
            } transition-transform duration-300`}
          >
            <Menu />
          </button>

          {isMenuOpen && (
            <ul className='w-full bg-white py-2 shadow-lg flex flex-col items-center justify-center gap-2 lg:hidden'>
              <li className='hover:underline'>
                <Link to='#about'>Categories</Link>
                <ExpandMore />
              </li>
              <li className='hover:underline'>
                <Link to='/item/highlights'>Highlights</Link>
              </li>
              <li className='hover:underline'>
                <Link to='/item/highlights'>What's New</Link>
              </li>

              <li className='hover:underline text-center'>
                <input
                  className='rounded-3xl w-5/6 px-4 py-2 bg-gray-100 placeholder:text-gray-500'
                  type='search'
                  placeholder='Search'
                />
                <Search className='absolute right-8 top-[8.2em] text-gray-500' />
              </li>

              <li className='hover:underline'>
                <BookmarksOutlined className='relative bottom-[3px] right-1' />
                <Link to='/bookmarks'>Bookmarks</Link>
              </li>
            </ul>
          )}
        </div>

        <ul className='lg:flex-row flex-col justify-between items-center h-full container m-auto lg:flex hidden'>
          <li className='hover:underline '>
            <Link to='#about'>Categories</Link>
            <ExpandMore />
          </li>
          <li className='hover:underline '>
            <Link to='/item/highlights'>Highlights</Link>
          </li>
          <li className='hover:underline '>
            <Link to='/item/highlights'>What's New</Link>
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
            <BookmarksOutlined className='relative bottom-[3px] right-1' />
            <Link to='/bookmarks'>Bookmarks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
