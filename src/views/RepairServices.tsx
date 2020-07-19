import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';

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
  const list = [0, 1, 2];

  const sectionDesktop = (
    <Grid container>
      {list.map((key) => (
        <Grid item key={key} xs={12} style={{ marginBottom: '50px' }}>
          <Grid container justify="space-around">
            {list.map((value) => (
              <Grid key={value} item>
                <a href="#!">
                  <img src={laptopImg} alt="laptop" width="150px" />
                </a>
                <Typography variant="body1">laptop repair</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
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
