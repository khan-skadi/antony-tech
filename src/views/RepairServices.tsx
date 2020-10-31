import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Box, Container } from '@material-ui/core';

import laptopImg from '../assets/images/laptop/1.jpg';

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
    <Container maxWidth="lg">
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
