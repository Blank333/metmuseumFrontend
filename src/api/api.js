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
  return axios.get(`${BASE_URL}/search?q=''&hasImage=true`).then((response) => {
    return response.data.objectIDs;
  });
};

export const getObjectIdsWithHighlight = () => {
  return axios
    .get(`${BASE_URL}/search?q=''&isHighlight=true`)
    .then((response) => {
      return response.data.objectIDs;
    });
};
