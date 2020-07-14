import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

import heroImage from '../assets/images/banner/banner3.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      display: 'flex',
      width: '100%',
      height: '70vh',
      justifyContent: 'center',
      alignItems: 'center',
      background: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url(${heroImage})`,
      // backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      // filter: 'brightness(25%)',
      [theme.breakpoints.down('md')]: {
        backgroundPosition: 'center right'
      }
    },
    heroContainer: {},
    heroInner: {
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing(1),
      filter: 'brightness(100%)'
    },
    heroTitle: {
      fontSize: '32px',
      fontWeight: 400,
      lineHeight: '40px',
      fontFamily: '"Montserrat", sans-serif',
      display: 'block',
      textAlign: 'center',
      textTransform: 'uppercase',
      '& > span': {
        color: theme.palette.secondary.main,
        // color: '#000',
        fontWeight: 700
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '28px'
      }
    },
    strokedText: {
      color: `${theme.palette.secondary.main} !important`
      // color: '#000 !important'
    },
    heroBtnContainer: {
      marginTop: '40px',
      display: 'flex',
      position: 'relative',
      justifyContent: 'space-between',
      margin: '0 -70px',
      [theme.breakpoints.down('md')]: {
        marginTop: '40px',
        margin: '0 -30px'
      }
    },
    heroButton: {
      padding: '5px 30px',
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '12px',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#fff',
        fontWeight: 600,
        color: theme.palette.primary.main
      },
      [theme.breakpoints.down('md')]: {
        padding: '5px 20px'
      }
    },
    heroButtonSecondary: {
      backgroundColor: theme.palette.secondary.dark,
      '&:hover': {
        color: theme.palette.secondary.dark
      }
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heroContainer} />
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
              disableElevation
            >
              Repair Services
            </Button>
            <Button
              className={`${classes.heroButton} ${classes.heroButtonSecondary}`}
              variant="contained"
              disableElevation
            >
              Find a Location
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
