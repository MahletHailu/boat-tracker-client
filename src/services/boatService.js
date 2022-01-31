
import { BoatsAPI, boatsAPI } from './boatsAPI';

class BoatService {
  api;

  constructor(api) {
    this.api = api;
  }

  async loadBoat(HIN) {
    try {
      const response = await this.api
        .get(`https://fishfrytoursboattrackerservice.azurewebsites.net/api/boats/${HIN}`);
      return response;
    } catch (error) {
        return undefined;
    }
  }

  async loadBoats() {
    try {
      const response = await this.api
      .get(
        `https://fishfrytoursboattrackerservice.azurewebsites.net/api/boats`
        );
      return response || [];
    } catch(error) {
      if (error.response && error.response.status !== 404) {
        // Handle Error here
        return [];
      }
      return [];
    }
  };
}

const boatService = new BoatService(boatsAPI)

export default boatService
