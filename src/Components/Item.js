import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getObjectDetails } from "../api/api";
import { RotateRightRounded, Star } from "@mui/icons-material";
import NotFound from "./NotFound";

function Item() {
  const { objectID } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(null);

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

  const handleImageClick = (image) => {
    const container = document.getElementById("primaryImageContainer");
    container.style.opacity = 0;
    setTimeout(() => {
      setCurrentImage(image);
      container.style.opacity = 1;
    }, 300);
  };

  return (
    <div className='container mx-auto border-t-2 '>
      <div className='py-8 px-4 flex justify-center'>
        {loading && (
          <RotateRightRounded
            className='animate-spin'
            style={{ fontSize: 48 }}
          />
        )}
        {data ? (
          <div className='grid grid-cols-2 rounded-lg'>
            <div className='flex flex-col m-6 '>
              <div
                className='bg-gray-200 p-8 rounded-xl transition-opacity duration-300'
                id='primaryImageContainer'
              >
                <Link
                  to={currentImage || data?.primaryImage}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex justify-center items-center '
                >
                  <img
                    src={currentImage || data?.primaryImage}
                    alt='Item'
                    className='w-3/4 h-3/4 object-contain rounded'
                  />
                </Link>
              </div>
              <div className='flex justify-between gap-5 mt-5'>
                {data.additionalImages.slice(0, 4).map((image) => (
                  <button onClick={() => handleImageClick(image)}>
                    <img
                      src={image}
                      alt='Item'
                      className='w-40 h-40 rounded bg-gray-200 p-4'
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className='mt-8 mr-8'>
              <div className='flex flex-col'>
                <h1 className='text-4xl font-bold'>{data?.title}</h1>
                <p className='text-gray-600 mt-4'>
                  {data?.artistRole && +":"} {data?.artistDisplayName}
                </p>
                <Link
                  to={data?.artistWikidata_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <p className='text-gray-600'>{data?.artistDisplayBio}</p>
                </Link>
                <p className='text-gray-600'>
                  {data?.creditLine && +","} {data?.medium}
                </p>
                <div className='flex text-green-500 mt-4'>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <p className='text-gray-600 font-medium'>(121)</p>
                </div>
              </div>
              <div className='mt-8 border-t-2'>
                <p className='text-lg font-semibold mt-8'>
                  Dimensions: {data?.dimensions}
                </p>
              </div>
              <div className='mt-8 border-t-2 '>
                <p className='font-medium text-xl mb-4 mt-8'>
                  Choose picture to view
                </p>
                <div className='flex justify-start gap-6 '>
                  <button onClick={() => handleImageClick(data.primaryImage)}>
                    <img
                      src={data.primaryImage}
                      alt='Item'
                      className='w-14 h-14 rounded-full active:outline-green-900 active:outline  p-1'
                    />
                  </button>
                  {data?.additionalImages.slice(0, 4).map((image) => (
                    <button onClick={() => handleImageClick(image)}>
                      <img
                        src={image}
                        alt='Item'
                        className='w-14 h-14 rounded-full active:outline-green-900 active:outline p-1'
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className='flex gap-8 mt-8 border-t-2'>
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
        ) : (
          !loading && <NotFound />
        )}
      </div>
    </div>
  );
}

export default Item;
