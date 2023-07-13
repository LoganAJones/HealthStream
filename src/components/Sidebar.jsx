import React from 'react';
import { List, ListItemButton, ListItemText, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList } from '@fortawesome/free-solid-svg-icons';
library.add(faList);

const useStyles = makeStyles((theme) => ({
  sidebar: {
    maxWidth: '150px',
    backgroundColor: '#848A8A',
    height: '1000px',
    paddingTop: '20px',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  padding: {
    paddingRight: '5px',
  },
  hover: {
    backgroundColor: '#6C7272',
    '&:hover': {
      borderLeft: `4px solid #77c2c0`,
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <div className={classes.sidebar}>
      <List component="nav" aria-label="sidebar">
        <ListItemButton className={classes.hover}>
          <FontAwesomeIcon className={classes.padding} fontWeight="bold" color="#77c2c0" icon={['fa-solid', 'fa-list']} />
          {!isSmallScreen ? (
            <ListItemText primary="Certifications" />
          ) : (
            <ListItemText primary="" />
          )}
        </ListItemButton>
      </List>
    </div>
  );
};

export default Sidebar;
