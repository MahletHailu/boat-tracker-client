import React, { useState, useCallback, useEffect } from 'react';
import {
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Slider,
  Typography
} from '@mui/material';
import { Boat } from 'types/boat';
import { BoatStateEnum, BoatStates, BoatStatesMobile } from 'types/boatState';

export interface BoatListItemProps {
  boat: Boat,
  updateState: (boat: Boat) => void,
}


const BoatListItem: React.FC<BoatListItemProps> = (
  { boat, updateState },
) => {
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [boatState, setBoatState] = useState<string>();

  const loadBoatState = useCallback(async () => {
    if (!boat) return;
    setBoatState(boat?.boatState?.id || '');
  }, [boat]);

  useEffect(() => {
    loadBoatState();
  }, [loadBoatState]);

  const handleOnStateUpdate = (
    event: Event, 
    value: number | number[]
  ): void => {

    if (value.toString() !== boatState) {
      setBoatState(value.toString());
      const updatedData = {...boat, boatState:{ id: value.toString(), description: BoatStateEnum[Number(value)]}}
      updateState(updatedData);
    }
  };

  return (
    <Paper
        elevation={10}
        sx={{
          borderRadius: '4px',
          margin: '20px',
          padding: '15px 70px 100px 15px',
          backgroundColor: theme.palette.grey[200],
        }}
        >
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography 
            gutterBottom
            sx={{
              fontWeight: 'bold',           
            }}
          >
            {isMobile? 
          (`${boat.name}`)
          :(`${boat.name} (${boat.hin})`)
            }
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>        
        <Slider
          aria-label="Custom marks"
          defaultValue={0}
          step={null}
          valueLabelDisplay="auto"
          marks={isMobile? BoatStatesMobile: BoatStates}
          min={0}
          max={3}
          value={Number(boatState || 0)}
          size="medium"
          onChange={handleOnStateUpdate}
          sx={{
            fontWeight: 'bold',  
            fontSize: '15px'   
          }}
        > 
      </Slider>  
        </Grid>
    </Grid>
    </Paper>
  );
};

export default BoatListItem;
