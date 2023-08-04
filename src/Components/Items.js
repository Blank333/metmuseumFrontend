import React, { useEffect, useState } from "react";
import { getObjectDetails, getObjectIdsWithImage } from "../api/api";
import { RotateRightRounded } from "@mui/icons-material";
import ItemCard from "./ItemCard";

function Items() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getObjectIdsWithImage()
      .then((objectIds) => {
        console.log(objectIds);
        const objectDetailsPromises = objectIds
          .slice(200, 210)
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

  return (
    <div className='container m-auto'>
      <h1 className='lg:text-3xl text-xl text-center lg:text-left mt-4 font-medium'>
        The Metropolitan Museum of Art
      </h1>
      <div className='flex flex-col lg:flex-row flex-wrap lg:justify-center'>
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
