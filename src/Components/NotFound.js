import React from "react";

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-semibold mb-4'>404 - Page Not Found</h1>
      <p className='text-gray-600 mb-8'>
        The page you are looking for is not here!
      </p>
    </div>
  );
};

export default NotFound;