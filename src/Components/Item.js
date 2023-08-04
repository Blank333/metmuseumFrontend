import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getObjectDetails } from "../api/api";

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
    <div className='min-h-screen bg-gray-100'>
      <div className='py-8 px-4 max-w-3xl mx-auto'>
        {loading ? (
          <div className='text-center'>Loading...</div>
        ) : data ? (
          <div className='w-full rounded-lg overflow-hidden shadow-lg'>
            <img
              src={data?.primaryImage}
              alt='Item'
              className='w-full h-64 object-cover'
            />
            <div className='mt-8'>
              <h1 className='text-2xl font-semibold'>{data?.title}</h1>
              <p className='text-gray-600'>by Seller Name</p>
              <div className='flex items-center mt-2'>
                <span className='text-green-600'>{data?.rating}</span>
                <span className='ml-1 text-sm text-gray-500'>
                  ⭐️⭐️⭐️⭐️⭐️
                </span>
              </div>
              <p className='text-lg font-bold mt-2'>${data?.price}</p>
              <p className='text-gray-600 mt-4'>
                {data?.description ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at enim nec neque condimentum dapibus. Aliquam iaculis auctor turpis vel mattis."}
              </p>
              <button className='mt-6 px-4 py-2 bg-yellow-500 text-white font-semibold rounded shadow-md hover:bg-yellow-600'>
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <div className='text-center'>Item not found</div>
        )}
      </div>
    </div>
  );
}

export default Item;
