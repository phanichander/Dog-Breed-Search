import axios from "axios";

const DOG_API = "https://api.thedogapi.com/v1/";

export const getApiRequest = async (path: string): Promise<any> => {
  return await axios({
    method:'get',
    url: DOG_API.concat(path)
  }).then((response) => {
    return response
  })
  .catch(error => {
      return (error.response);
  });
};


