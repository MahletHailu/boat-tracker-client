import axios from 'axios';

export class BoatsAPI {
  
  async get(path) {
    
      return axios({
        method: 'get',
        url: path,
        responseType: 'json'
      })
      .then(({ data }) => data)
      .catch(function (error) {
        console.log(error);
      });
  };

  async put(path, body) {

    return axios
      .create({
        baseURL: 'https://fishfrytoursboattrackerservice.azurewebsites.net/api/',
        headers: {
          'Content-Encoding': 'gzip, compress',
          'content-type': `application/json;charset=UTF-8;`,
        },
      })
      .put(path, body)
      .then(({ data }) => data)
      .catch(function (error) {
        console.log(error);
      });
  };

  async post(path, body) {

    return axios
      .create({
        baseURL: 'https://fishfrytoursboattrackerservice.azurewebsites.net/api/',
        headers: {
          'Content-Encoding': 'gzip, compress',
          'content-type': `application/json;charset=UTF-8;`,
        },
      })
      .post(path, body)
      .then(({ data }) => data)
      .catch(function (error) {
        console.log(error);
      });
  };

  async delete(path, accept) {

    return axios
      .create({
        baseURL: 'https://fishfrytoursboattrackerservice.azurewebsites.net/api/',
        headers: {
          'Content-Encoding': 'gzip, compress',
          accept,
          'content-type': `application/json;charset=UTF-8;`,
        },
      })
      .delete(path)
      .then(({ data }) => data)
      .catch(function (error) {
        console.log(error);
      });
  };
}

export const boatsAPI = new BoatsAPI();