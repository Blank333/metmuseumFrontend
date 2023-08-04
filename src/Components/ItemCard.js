import { BookmarkAddOutlined } from "@mui/icons-material";
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
    <div className='lg:w-1/4 p-4 flex flex-col'>
      <Link
        to={`/item/${objectID}`}
        className='hover:shadow-xl rounded-xl p-1 h-full'
      >
        <div className='relative rounded shadow-md h-96 bg-gray-100 flex items-center justify-center overflow-hidden'>
          <button>
            <div className='absolute top-2 right-2 bg-white rounded-full text-gray-500 p-1'>
              <BookmarkAddOutlined />
            </div>
          </button>
          <img
            className='w-60 h-80 object-cover rounded'
            src={primaryImageSmall}
            alt={title}
          />
        </div>
        <div className='mt-4'>
          <div className='flex  justify-between'>
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
      <div className='flex flex-grow items-end'>
        <button className='border-4 border-gray-300 rounded-full hover:bg-green-user hover:text-white hover:border-green-user my-4 py-2 px-4 font-medium'>
          Add to Bookmarks
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
