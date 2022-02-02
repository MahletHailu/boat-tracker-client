/* 
/*
 * BoatsList
 *
 *
 */

import React from 'react';
import { Box, List, Paper, useTheme }  from '@mui/material';
import { Boat } from '../../types/boat';
import BoatListItem from './BoatListItem';

export interface BoatListProps {
  boats: Boat[],  
  updateState: (boat: Boat) => void
}

const BoatsList : React.FC<BoatListProps> = ({
  boats, 
  updateState 
}) => {
  const theme = useTheme();

  return (
    <Paper
    elevation={10}
    sx={{
      borderRadius: '4px',
      margin: '20px',
      padding: '15px 20px 0px 15px',
      backgroundColor: theme.palette.grey[800],
    }}
  >
    <Box m={1}>
      <List      
      disablePadding
      sx={{
        pt: '10px',
        pb: '10px',
      }}
      >
        {boats.map((b) => (
          <BoatListItem
            key={b.hin}
            boat={b}
            updateState={updateState}
          />
        ))}
      </List>
    </Box>
    </Paper>
  );
};

export default BoatsList;
