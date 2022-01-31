/* 
/*
 * BoatsList
 *
 *
 */

import React from 'react';
import { Box, List, useTheme }  from '@mui/material';
import { Boat } from '../../types/boat';

export interface BoatListProps {
  boats: Boat[]
}

const BoatsList : React.FC<BoatListProps> = ({
  boats
}) => {
  const theme = useTheme();

  return (
    <Box m={1}>
      <List      
      disablePadding
      sx={{
        border: 1,
        borderRadius: 1,
        borderColor: theme.palette.action.hover,
        pt: '10px',
        pb: '10px',
      }}
      >
        {boats.map((sk) => (
          <div>{boats[2].hid}</div>
         // <SkillSetListItem
          //  key={sk.uri}
          //  skillSet={sk}
          //  onItemClick={onClick}
         // />
        ))}
      </List>
    </Box>
  );
};

export default BoatsList;
