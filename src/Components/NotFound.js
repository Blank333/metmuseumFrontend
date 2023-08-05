import React from "react";
import notFound from "../images/notFound.jpg";
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center lg:absolute top-0 -z-10'>
      <div className='overflow-hidden lg:h-screen'>
        <img
          src={notFound}
          alt='404 Not Found'
          className='object-contain w-100'
        />
      </div>
      <div className='lg:absolute top-40 text-center text-gray-900 lg:text-3xl text-lg mt-4'>
        <h1 className='lg:text-6xl text-3xl font-semibold mb-4 '>
          404 - Page Not Found
        </h1>
        <p className='mb-8'>The page you are looking for is not here!</p>
      </div>
    </div>
  );
};

export default NotFound;
