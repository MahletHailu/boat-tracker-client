
import React, { useEffect, useState } from 'react';
import BoatsList from '../components/DashBoard/BoatsList';
import boatService from '../services/boatService.js';
import { Boat } from '../types/boat';

const DashBoardPage: React.FC = () => {
const [boats, setBoats] = useState<Boat[]>([]);

  useEffect(() => {
    boatService
      .loadBoats()
      .then((boats) => {
        setBoats(boats);
        
    boatService
    .loadBoat('3124567890')
    .then((boat) => {
      console.log(boat);
  });
    });
  }, []);

  return(
  <BoatsList boats={boats}>
  </BoatsList>
  );  
};

export default DashBoardPage;
