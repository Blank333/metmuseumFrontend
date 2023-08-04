import axios from "axios";

const BASE_URL = "https://collectionapi.metmuseum.org/public/collection/v1";

export const getObjectIds = () => {
  return axios.get(`${BASE_URL}/objects`).then((response) => {
    return response.data.objectIDs;
  });
};

export const getObjectDetails = (objectId) => {
  return axios.get(`${BASE_URL}/objects/${objectId}`).then((response) => {
    return response.data;
  });
};

export const getObjectIdsWithImage = () => {
  return axios.get(`${BASE_URL}/search?q=hasImages`).then((response) => {
    return response.data.objectIDs;
  });
};
