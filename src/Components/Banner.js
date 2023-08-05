import { ExpandMore, PhoneOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className='p-2 bg-green-user text-white lg:text-sm text-[10px] font-light lg:h-10'>
      <ul className='flex justify-between container m-auto items-center'>
        <li>
          <PhoneOutlined fontSize='small' />
          <Link to='/'>+917807877689</Link>
        </li>
        <li>
          <Link to='https://www.metmuseum.org/'>
            <span className='lg:mx-7'>Visit the official website!</span>
            <p className='lg:inline hidden '>|</p>
            <span className='mx-7 lg:inline hidden'>View Now</span>
          </Link>
        </li>
        <li className='flex'>
          <section className='lg:mr-4'>
            <select>
              <option value='english' className='text-black'>
                English
              </option>
              <option value='hindi' className='text-black'>
                हिंदी
              </option>
              <option value='kannada' className='text-black'>
                ಕನ್ನಡ
              </option>
            </select>
            <ExpandMore fontSize='small' />
          </section>
          <section className='lg:ml-4'>
            <select>
              <option disabled defaultValue hidden>
                Location
              </option>
              <option value='India' className='text-black'>
                India
              </option>
              <option value='USA' className='text-black'>
                USA
              </option>
              <option value='UK' className='text-black'>
                UK
              </option>
            </select>
            <ExpandMore fontSize='small' />
          </section>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
