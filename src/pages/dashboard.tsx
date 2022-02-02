
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
        
    });
  }, []);
  
  const updateState = (boat:Boat) => {
     boatService
      .updateABoat(boat)
      .then((result) => {

        if(!result){
          // Erro update the user that data is not updated successfully
        }
      console.log(boat);
  });

  }
  
  return(
  <BoatsList 
  boats={boats}
  updateState={updateState}
  >
  </BoatsList>
  );  
};

export default DashBoardPage;
