import React, { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import {    
    List,
    ListItem,    
    ListItemText,
    Drawer,    
    IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const humburgerMenu = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [menuOpen, setMenuOpen] = useState(false);

  return (
      <>
        <Drawer open={menuOpen}  onClose={() => setMenuOpen(false)}>
            <List>
                <ListItem
                 onClick={() => setMenuOpen(!menuOpen)}>
                    <ListItemText>
                        <Link to="/">DashBoard</Link>
                    </ListItemText>
                </ListItem>
                <ListItem
                 onClick={() => setMenuOpen(!menuOpen)}>
                    <ListItemText>
                        <Link to="/admin">Admin</Link>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
        <IconButton 
            onClick={() => setMenuOpen(!menuOpen)}>
            <MenuIcon />
        </IconButton>
      </>
  );
};

export default humburgerMenu;
