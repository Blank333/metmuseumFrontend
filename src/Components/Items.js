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
          .slice(200, 250)
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
      <h1 className='text-3xl'>The Metropolitan Museum of Art</h1>
      <div className='flex flex-wrap justify-center '>
        {loading && (
          <RotateRightRounded
            className='animate-spin relative top-52 '
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
