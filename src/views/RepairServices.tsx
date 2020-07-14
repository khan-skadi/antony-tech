import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import laptopImg from '../assets/images/laptop/1.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionRepairServices: {
      flexGrow: 1,
      textAlign: 'center'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    desktopContainer: {},
    desktopWrapper: {},
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
);

const RepairServices = () => {
  const classes = useStyles();

  const sectionDesktop = (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <a href="#!" target="_blank" rel="noopener noreferrer">
          <img src={laptopImg} alt="laptop" width="150px" />
        </a>
        <Typography variant="body1">laptop repair</Typography>
      </Grid>
      <Grid item xs={4}>
        <a href="#!" target="_blank" rel="noopener noreferrer">
          <img src={laptopImg} alt="laptop" width="150px" />
        </a>
        <Typography variant="body1">laptop repair</Typography>
      </Grid>
      <Grid item xs={4}>
        <a href="#!" target="_blank" rel="noopener noreferrer">
          <img src={laptopImg} alt="laptop" width="150px" />
        </a>
        <Typography variant="body1">laptop repair</Typography>
      </Grid>
    </Grid>
  );

  return (
    <section className={classes.sectionRepairServices}>
      <h1>Repair Services</h1>
      <div className={classes.sectionDesktop}>{sectionDesktop}</div>
    </section>
  );
};

export default RepairServices;
