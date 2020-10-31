import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';
import getRepairCategories from '../util/getRepairCategories';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    sectionRepairServices: {
      flexGrow: 1,
      textAlign: 'center'
    },
    sectionTitle: {
      margin: '50px 0 0 0',
      fontSize: '24px',
      fontFamily: '"Montserrat", sans-serif',
      lineHeight: '40px',
      textTransform: 'uppercase',
      fontWeight: 600
    },
    subtitle: {
      fontFamily: theme.typography.fontFamily,
      fontSize: '18px'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    serviceInner: {
      marginTop: '30px'
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
    },
    serviceText: {
      fontSize: '20px',
      fontWeight: 600
    }
  })
);

const RepairServices = () => {
  const classes = useStyles();
  const repairCategories = getRepairCategories();

  const sectionDesktop = (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {repairCategories.map((item, index) => (
            <Grid item xs={4} key={index}>
              <div className={classes.serviceInner}>
                <img
                  className={classes.serviceImage}
                  src={item.image}
                  alt="repair service"
                />
                <Typography className={classes.serviceText} variant="body1">
                  {item.text}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );

  return (
    <section className={classes.sectionRepairServices}>
      <Typography variant="h1" className={classes.sectionTitle}>
        Repair Services
      </Typography>
      <Typography className={classes.subtitle} variant="subtitle1">
        Choose your device
      </Typography>
      <div className={classes.sectionDesktop}>{sectionDesktop}</div>
    </section>
  );
};

export default RepairServices;
