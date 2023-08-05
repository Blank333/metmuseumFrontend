import { BookmarkAddOutlined, Star } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ data }) {
  const {
    primaryImageSmall,
    objectDate,
    department,
    title,
    country,
    objectID,
  } = data;

  return (
    <div className='lg:w-1/4 w-full p-4 flex flex-col relative'>
      <button>
        <div className='absolute top-7 right-7 bg-white rounded-full text-gray-500 p-1 hover:bg-green-user hover:text-white transition-colors duration-500'>
          <BookmarkAddOutlined />
        </div>
      </button>
      <Link
        to={`/item/${objectID}`}
        className='hover:shadow-xl rounded-xl p-1 h-full'
      >
        <div className='rounded shadow-md h-96 bg-gray-100 flex items-center justify-center overflow-hidden '>
          <img
            className='w-60 h-80 object-cover rounded'
            src={primaryImageSmall}
            alt={title}
          />
        </div>
        <div className='mt-4'>
          <div className='flex justify-between'>
            <h2 className='text-lg font-semibold'>
              {title.length > 22 ? title.slice(0, 22) + "..." : title}
            </h2>
            <p className='font-light text-gray-500'>
              {objectDate.length > 25
                ? objectDate.slice(0, 25) + "..."
                : objectDate}
            </p>
          </div>
          <p className='text-gray-600 text-sm'>
            {country && country + ","} {department}
          </p>
        </div>
      </Link>
      <div className='flex flex-col items-start flex-grow justify-end'>
        <div className='flex text-green-500'>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <p className='text-gray-600 font-medium'>(121)</p>
        </div>
        <button className='border-4 border-gray-300 rounded-full hover:bg-green-user hover:text-white hover:border-green-user my-4 py-2 px-4 font-medium transition-colors duration-500'>
          Add to Bookmarks
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
