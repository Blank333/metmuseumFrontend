import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getObjectDetails } from "../api/api";
import { RotateRightRounded, Star } from "@mui/icons-material";

function Item() {
  const { objectID } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getObjectDetails(objectID)
      .then((res) => setData(res))
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className='bg-gray-100 container mx-auto'>
      <div className='py-8 px-4'>
        {loading && (
          <RotateRightRounded
            className='animate-spin text-center '
            style={{ fontSize: 48 }}
          />
        )}
        {data && (
          <div className='grid grid-cols-2 rounded-lg overflow-hidden shadow-lg'>
            <div className='flex flex-col m-6'>
              <div className='bg-gray-200 p-8  rounded-xl'>
                <Link
                  to={data?.primaryImage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-center items-center'
                >
                  <img
                    src={data?.primaryImage}
                    alt='Item'
                    className='w-3/4 h-3/4 object-contain rounded'
                  />
                </Link>
              </div>
              <div className='flex justify-between gap-5 mt-5'>
                {data.additionalImages.slice(0, 4).map((image) => (
                  <Link to={image} target='_blank' rel='noopener noreferrer'>
                    <img
                      src={image}
                      alt='Item'
                      className='w-40 h-40 rounded bg-gray-200 p-4'
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className='mt-8'>
              <h1 className='text-2xl font-semibold'>{data?.title}</h1>
              <p className='text-gray-600'>by Seller Name</p>
              <div className='flex items-center mt-2'>
                <span className='text-green-600'>{data?.rating}</span>
                <div className='flex text-green-500'>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <p className='text-gray-600 font-medium'>(121)</p>
                </div>
              </div>
              <p className='text-lg font-bold mt-2'>${data?.price}</p>
              <p className='text-gray-600 mt-4'>
                {data?.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at enim nec neque condimentum dapibus. Aliquam iaculis auctor turpis vel mattis."}
              </p>
              <div className='flex gap-8'>
                <Link
                  to={data?.objectURL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-4 border-green-user rounded-full bg-green-user text-white hover:border-green-user my-4 py-2 px-10 font-medium'
                >
                  View on Met Museum
                </Link>
                <button className='border-4 border-green-900 rounded-full hover:bg-green-user hover:text-white hover:border-green-user my-4 py-2 px-10 font-medium'>
                  Add to Bookmarks
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
