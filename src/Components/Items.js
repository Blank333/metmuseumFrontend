import React, { useEffect, useState } from "react";
import {
  getObjectDetails,
  getObjectIdsWithHighlight,
  getObjectIdsWithImage,
} from "../api/api";
import { RotateRightRounded } from "@mui/icons-material";
import ItemCard from "./ItemCard";

function Items({ isHighlight }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let getObjectIdsPromise;
    isHighlight
      ? (getObjectIdsPromise = getObjectIdsWithHighlight())
      : (getObjectIdsPromise = getObjectIdsWithImage());

    getObjectIdsPromise
      .then((objectIds) => {
        console.log(objectIds);
        const objectDetailsPromises = objectIds.slice(0, 15).map((objectId) =>
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

  return (
    <div className='container m-auto'>
      <h1 className='lg:text-3xl text-xl text-center lg:text-left mt-4 font-medium'>
        The Metropolitan Museum of Art
      </h1>
      {isHighlight && (
        <h1 className='lg:text-xl text-center lg:text-left mt-4 font-medium underline'>
          Highlighted Items
        </h1>
      )}
      <div className='flex flex-col lg:flex-row flex-wrap lg:justify-center lg:items-start items-center'>
        {loading && (
          <RotateRightRounded
            className='animate-spin relative top-20 '
            style={{ fontSize: 48 }}
          />
        )}
        {data
          .filter((item) => item.isPublicDomain)
          .map((item) => {
            return <ItemCard data={item} key={item.objectID} />;
          })}
      </div>
    </div>
  );
}

export default Items;
