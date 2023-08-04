import React, { useEffect, useState } from "react";
import { getObjectDetails, getObjectIdsWithImage } from "../api/api";
import { RotateRightRounded } from "@mui/icons-material";

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
      <div className='flex flex-wrap'>
        {loading && (
          <RotateRightRounded
            className='animate-spin relative top-52'
            style={{ fontSize: 48 }}
          />
        )}
        {data
          .filter((item) => item.isPublicDomain)
          .map((item) => {
            const {
              primaryImageSmall,
              primaryImage,
              department,
              title,
              country,
              objectID,
            } = item;
            console.log(loading);
            return (
              <div className='w-1/4 p-4 flex flex-col' key={objectID}>
                <div className='rounded shadow-lg h-96 w-80 bg-gray-200 flex items-center justify-center overflow-hidden'>
                  <img
                    className='w-60 h-60 object-cover rounded '
                    src={primaryImageSmall}
                    alt={title}
                  />
                </div>
                <div className='mt-4 '>
                  <h2 className='text-lg font-semibold'>
                    {title.length > 45 ? title.slice(0, 45) + "..." : title}
                  </h2>
                  <p className='text-gray-600 text-sm'>
                    {country && country + ","} {department}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Items;
