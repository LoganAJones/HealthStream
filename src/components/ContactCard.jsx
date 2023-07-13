import React from 'react';
import { Box, Typography, createTheme, ThemeProvider, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {  faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';

library.add(faPhone, faEnvelope, faEnvelopeRegular);

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    width: '70%',
    backgroundColor: '#fff',
  },
  box: {
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#f7f8fa',
    padding: '15px',
    borderRadius: '4px',
    marginRight: '20px',
    border: 1,
    transition: 'background-color 0.25s ease-in',
    '&:hover': {
        backgroundColor: `#848A8A`
    },
  },
  flex: {
    flexDirection: 'row',
    display: 'flex',
  },
  padding: {
    paddingRight: "5px"
  }
}));

const theme = createTheme({
  typography: {
    body1: {
      fontWeight: 'bold',
    },
  },
});

const ContactCard = ({ contactData }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.card} component="div">
        <Box borderBottom={1} borderColor={'gray'}>
          <Typography align="left" fontWeight="bold" fontSize="28px" paddingBottom={"10px"}>
            Contact
          </Typography>
        </Box>
        <Box marginBottom="20px">
          <Typography align="left" variant="body2" paddingTop="10px">
            Need help with something that isn't covered in our documentation? Reach out to a customer support representative.
          </Typography>
        </Box>
        <Box className={classes.flex}>
          <Box className={classes.box} sx={{ maxWidth: '200px', border: 1, borderColor: "gray"}}>
            <Typography variant="body1" color="text.secondary">
              Phone Support
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our Phone lines are open from 8am-5pm CST to answer your questions.
            </Typography>
            <Link href={contactData.contactPhone} variant="body2">
            <FontAwesomeIcon className={classes.padding} icon={['fas', 'phone']} />
              {contactData.contactPhone}
            </Link>
          </Box>
          <Box className={classes.box} sx={{ maxWidth: '200px', border: 1 , borderColor: "gray"}}>
            <Typography variant="body1" color="text.secondary">
              Email Support
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Send us an email with your question and our support team will get back to you.
            </Typography>
            <Link href={contactData.contactEmail} variant="body2">
            <FontAwesomeIcon className={classes.padding} icon={['far', 'envelope']}/>
              {contactData.contactEmail}
            </Link>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContactCard;
