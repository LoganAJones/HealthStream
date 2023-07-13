import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faChevronLeft);

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff',
    justifyContent: 'flex-end'
  },
  back: {
    flexDirection: 'row',
    display: 'flex',
    paddingRight: '5px',
    paddingBottom: '10px'
  },
  info: {
    textAlign: 'left',
    fontWeight: 'bold',
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '80px',
    paddingTop: '10px',
    paddingBottom: '1px'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    '& > *': {
      paddingBottom: '10px'
    }
  },
  flex: {
    flexDirection: 'row',
    itemsAlign:'center',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  edit: {
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  editbox: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    '& > *': {
      paddingBottom: '10px',
    },
  },
}));

const CertificationsCard = ({ certificationData }) => {
  const classes = useStyles();

  return (
    <Box className={classes.flex} width="100%">
      <Box className={classes.card} paddingRight="20px" width="70%">
        <Box className={classes.back} borderBottom={1} borderColor="gray">
          <Link underline="hover" href="#" variant="body2" fontWeight="bold" paddingRight="15px" fontSize="16px">
            Certifications
          </Link>
          <Typography alignContent="center">
            <FontAwesomeIcon icon={['fa-solid', 'fa-chevron-right']} fontSize="12px" />
          </Typography>
          <Typography paddingLeft="15px">
            View Certification
          </Typography>
          <Typography marginLeft="Auto">
            <Link underline="hover" href="#" variant="body2" fontWeight="bold" fontSize="16px" display="flex" justifyContent="flex-end">
              <Typography paddingRight="5px" paddingLeft="5px" alignContent="center" fontSize="12px">
                <FontAwesomeIcon icon={['fa-solid', 'fa-chevron-left']} fontSize="12px" />
              </Typography>
              Back
            </Link>
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <Box className={classes.info}>
            <Typography variant="h7">
              General Info
            </Typography>
          </Box>
          <Box className={classes.box} paddingTop="10px">
            <Typography variant="h7" fontWeight="bold">
              {certificationData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Verified By:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {certificationData.verifiedBy}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Completed Date:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(certificationData.completedDate).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight="bold">
              Certificate ID:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {certificationData.certificateId}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.editbox} width={'20%'}>
        <Box className={classes.edit} marginLeft="15px">
          <Button variant="contained" color="primary" style={{ backgroundColor: '#fff0f5', color: '#c5315f', marginBottom: "20px" }}>
            <Typography variant="h7" fontWeight="bold">
              Edit Details
            </Typography>
          </Button>
          <Button variant="contained" color="secondary" style={{ backgroundColor: '#fff0f5', color: '#c5315f', marginBottom: "1px" }}>
            <Typography variant="h7" fontWeight="bold">
              Delete
            </Typography>
          </Button>
        </Box> 
       </Box>
    </Box>
  );
};

export default CertificationsCard;
