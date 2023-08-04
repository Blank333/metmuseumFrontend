import { ExpandMore, PhoneOutlined } from "@mui/icons-material";
import React from "react";

function Navbar() {
  return (
    <section className='p-2 bg-green-banner text-white text-sm font-light h-10'>
      <ul className='flex justify-between container m-auto items-center'>
        <li>
          <PhoneOutlined />
          <a href='/'>+917807877689</a>
        </li>
        <li>
          <a href='/about'>
            <span className='mx-7'>Get 50% Off on selected items!</span>|
            <span className='mx-7'>Shop Now</span>
          </a>
        </li>
        <li className='flex'>
          <section className='mr-4'>
            <a href='/contact'>English</a>
            <ExpandMore />
          </section>
          <section className='ml-4'>
            <a href='/contact'>Location</a>
            <ExpandMore />
          </section>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
