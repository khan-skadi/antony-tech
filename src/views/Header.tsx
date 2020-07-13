import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Typography, Button } from '@material-ui/core';

import heroImage from '../assets/images/banner/banner3.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      display: 'flex',
      width: '100%',
      height: '70vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    },
    heroInner: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1)
    },
    heroTitle: {
      fontSize: '26px',
      fontWeight: 400,
      lineHeight: '40px',
      fontFamily: '"Montserrat", sans-serif',
      display: 'block',
      textAlign: 'center',
      '& > span': {
        color: theme.palette.primary.main,
        fontWeight: 700
      }
    },
    strokedText: {
      textTransform: 'uppercase',
      color: `${theme.palette.secondary.main} !important`
      // color: 'transparent !important',
      // WebkitTextStroke: `2px ${theme.palette.secondary.main}`
    },
    heroBtnContainer: {
      marginTop: '40px',
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      margin: '0 -60px'
    },
    heroButton: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '13px'
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.heroInner}>
        <div className={classes.heroTitle}>
          <span className={classes.strokedText}>Pickup</span> & <br />
          <span>DELIVERY</span> SERVICE
        </div>
        <div className={classes.heroBtnContainer}>
          <Button
            className={classes.heroButton}
            variant="contained"
            color="primary"
          >
            Repair Services
          </Button>
          <Button
            className={classes.heroButton}
            variant="contained"
            color="secondary"
          >
            Find a Location
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;
