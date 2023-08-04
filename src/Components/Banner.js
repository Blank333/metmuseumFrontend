import { ExpandMore, PhoneOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className='p-2 bg-green-user text-white text-sm font-light h-10'>
      <ul className='flex justify-between container m-auto items-center'>
        <li>
          <PhoneOutlined />
          <Link to='/'>+917807877689</Link>
        </li>
        <li>
          <Link to='https://www.metmuseum.org/'>
            <span className='mx-7'>Visit the official website!</span>|
            <span className='mx-7'>View Now</span>
          </Link>
        </li>
        <li className='flex'>
          <section className='mr-4'>
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
              <ExpandMore />
            </select>
          </section>
          <section className='ml-4'>
            <select>
              <option disabled selected hidden>
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
            <ExpandMore />
          </section>
        </li>
      </ul>
    </section>
  );
}

export default Navbar;
