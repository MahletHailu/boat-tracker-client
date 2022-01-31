import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';


const BoatListItem = (
  { boat },
) => {

  const handleItemClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
          <ListItem sx={{
            borderRadius: '4px',
            pb: '2px',
          }}
          >
            <ListItemButton
              sx={{
                borderRadius: '4px',
                backgroundColor: 'action.disabled',
              }}
              onClick={handleItemClick}
            >
              <ListItemText
                sx={{
                  textAlign: 'left',
                }}
              >
                boat.
              </ListItemText>
            </ListItemButton>
          </ListItem>
  );
};

export default BoatListItem;
