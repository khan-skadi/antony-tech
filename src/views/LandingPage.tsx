import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Header from './Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {}
  })
);

const LandingPage = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Header />
    </section>
  );
};

export default LandingPage;
