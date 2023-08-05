import React, { useEffect, useState } from "react";
import {
  getObjectDetails,
  getObjectIdsWithHighlight,
  getObjectIdsWithImage,
} from "../api/api";
import { ExpandMore, RotateRightRounded, Tune } from "@mui/icons-material";
import ItemCard from "./ItemCard";
import ImageBanner from "./ImageBanner";

function Items({ isHighlight }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = () => {
    let getObjectIdsPromise;
    isHighlight
      ? (getObjectIdsPromise = getObjectIdsWithHighlight())
      : (getObjectIdsPromise = getObjectIdsWithImage());

    getObjectIdsPromise
      .then((objectIds) => {
        console.log(objectIds);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const objectDetailsPromises = objectIds
          .slice(startIndex, endIndex)
          .map((objectId) =>
            getObjectDetails(objectId).catch((error) => {
              console.error("Error fetching object details:", error);
              return null;
            })
          );

        return Promise.all(objectDetailsPromises);
      })
      .then((objectDetailsResponses) => {
        const filteredResponses = objectDetailsResponses.filter(
          (response) => response !== null
        );

        setData(filteredResponses);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setLoading(true);
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setLoading(true);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='container m-auto'>
      <ImageBanner />
      <div className='flex lg:gap-6 lg:justify-start justify-between flex-wrap mx-3'>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          Art Type
          <ExpandMore />
        </button>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          Department
          <ExpandMore />
        </button>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          Artist
          <ExpandMore />
        </button>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          Image
          <ExpandMore />
        </button>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          Location
          <ExpandMore />
        </button>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          Medium of Art
          <ExpandMore />
        </button>
        <button className='p-3 bg-gray-200 rounded-full font-semibold mt-8'>
          All Filters
          <Tune className='ml-2' />
        </button>
      </div>
      <h1 className='lg:text-3xl text-xl text-center lg:text-left mt-8 font-bold'>
        The Metropolitan Museum of Art
      </h1>
      {isHighlight && (
        <h1 className='lg:text-xl text-center lg:text-left mt-4 font-medium underline'>
          Highlighted Items
        </h1>
      )}
      <div className='flex flex-col lg:flex-row mt-8 flex-wrap lg:justify-center lg:items-start items-center '>
        {loading ? (
          <RotateRightRounded
            className='animate-spin'
            style={{ fontSize: 48 }}
          />
        ) : (
          data
            .filter((item) => item.isPublicDomain)
            .map((item) => {
              return <ItemCard data={item} key={item.objectID} />;
            })
        )}
      </div>

      <div className='flex justify-center my-4'>
        <button
          onClick={handlePreviousPage}
          className={`bg-green-user hover:bg-green-950 text-white font-bold py-2 px-4 mx-2 rounded-full w-40 ${
            currentPage > 1 ? "" : "hidden"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className={`bg-green-user hover:bg-green-950 text-white font-bold py-2 px-4 mx-2 rounded-full w-40 ${
            currentPage < 200 ? "" : "hidden"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Items;
