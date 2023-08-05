export const addBookmark = (objectID) => {
  return {
    type: "addBookmark",
    payload: objectID,
  };
};

export const removeBookmark = (objectID) => {
  return {
    type: "removeBookmark",
    payload: objectID,
  };
};
