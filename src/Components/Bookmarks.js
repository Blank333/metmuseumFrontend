import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getObjectDetails } from "../api/api";
import ItemCard from "./ItemCard";
import { RotateRightRounded } from "@mui/icons-material";

function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all(
      bookmarks.map((objectId) =>
        getObjectDetails(objectId).catch((error) => {
          console.error("Error fetching object details:", error);
          return null;
        })
      )
    )
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

      <div className='flex flex-col lg:flex-row flex-wrap lg:justify-center lg:items-start items-center'>
        {loading && (
          <RotateRightRounded
            className='animate-spin relative top-20 '
            style={{ fontSize: 48 }}
          />
        )}
        {bookmarks.length !== 0 ? (
          data.map((item) => {
            return <ItemCard data={item} key={item.objectID} />;
          })
        ) : (
          <p>No bookmarks added</p>
        )}
      </div>
    </div>
  );
}

export default Bookmarks;
