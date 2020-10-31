import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import { repairServices } from '../util/constants';

// images
import laptopImg from '../assets/images/laptop/1.jpg';
import repImg1 from '../assets/images/repair/iphone.png';
import repImg2 from '../assets/images/repair/laptop.png';
import repImg3 from '../assets/images/repair/macbook1.png';
import repImg4 from '../assets/images/repair/smartphone.png';
import repImg5 from '../assets/images/repair/desktop.png';
import repImg6 from '../assets/images/repair/ipad.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionRepairServices: {
      flexGrow: 1,
      textAlign: 'center'
    },
    sectionTitle: {
      margin: '50px 0',
      fontSize: '24px',
      fontFamily: '"Montserrat", sans-serif',
      lineHeight: '40px',
      textTransform: 'uppercase',
      fontWeight: 600
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    serviceImage: {
      maxWidth: '200px',
      maxHeight: '140px'
    }
  })
);

const list = (
  <>
    <Grid item xs={4}>
      <a href="#!">
        <img src={laptopImg} alt="laptop" width="150px" />
      </a>
      <Typography variant="body1">laptop repair</Typography>
    </Grid>
    <Grid item xs={4}>
      <a href="#!">
        <img src={laptopImg} alt="laptop" width="150px" />
      </a>
      <Typography variant="body1">laptop repair</Typography>
    </Grid>
    <Grid item xs={4}>
      <a href="#!">
        <img src={laptopImg} alt="laptop" width="150px" />
      </a>
      <Typography variant="body1">laptop repair</Typography>
    </Grid>
  </>
);

const RepairServices = () => {
  const classes = useStyles();
  const repImg = [repImg1, repImg2, repImg3, repImg4, repImg5, repImg6];

  const sectionDesktop = (
    <Container maxWidth="lg">
      <Grid container>
        {repImg.map((item) => (
          <div>
            <img
              className={classes.serviceImage}
              src={item}
              alt="repair service"
            />
          </div>
        ))}
      </Grid>
    </Container>
  );

  return (
    <section className={classes.sectionRepairServices}>
      <Typography variant="h1" className={classes.sectionTitle}>
        Repair Services
      </Typography>
      <div className={classes.sectionDesktop}>{sectionDesktop}</div>
    </section>
  );
};

export default RepairServices;
