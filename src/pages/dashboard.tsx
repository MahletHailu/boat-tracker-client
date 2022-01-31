
import React, { useEffect } from 'react';
import boatService from '../services/boatService.js';

const DashBoardPage: React.FC = () => {

  useEffect(() => {
    boatService
      .loadBoats()
      .then((boats) => {
        console.log(boats);
        
    boatService
    .loadBoat('3124567890')
    .then((boat) => {
      console.log(boat);
  });
    });
  }, []);

  return(
  <div>
    Dashboard Page.
  </div>);
};

export default DashBoardPage;
