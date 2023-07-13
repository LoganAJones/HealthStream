import React from 'react';
import CertificationsCard from '../components/CertificationCard';
import { Grid, Typography, Hidden } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ContactCard from '../components/ContactCard';
import Sidebar from '../components/Sidebar';

const useStyles = makeStyles((theme) => ({
  certificationsPage: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: '#eaedf0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  sidebar: {
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  content: {
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    fontWeight: 'bold',
  },
}));

const certificationData = {
  id: 'dd16dc15-0c8d-4d5d-b2a5-210f58fc7599',
  title: 'NALS: Neonatal Advanced Life Support',
  verifiedBy: 'American Academy of Pediatrics',
  completedDate: 1688751487753,
  certificateId: 'ACD1653',
};

const contactData = {
  contactPhone: '1-800-521-0574',
  contactEmail: 'demo@demo.com',
};

const Certification = () => {
  const classes = useStyles();

  return (
    <div className={classes.certificationsPage}>
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid item className={classes.sidebar}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item className={classes.content}>
          <Typography align="left" fontWeight="bold" fontSize="28px" paddingBottom={2} paddingTop={2}>
            View Certification
          </Typography>
          <CertificationsCard certificationData={certificationData} />
          <ContactCard contactData={contactData} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Certification;
