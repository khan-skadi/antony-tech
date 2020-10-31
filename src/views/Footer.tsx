import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/logo/at-logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      background: '#333'
    },
    text: {
      textDecoration: 'none',
      color: '#fff'
    }
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/" className={classes.text}>
              <img src={logo} alt="Antony Tech" />
            </a>
            <Typography className={classes.text} variant="body1">
              Antony Tech
            </Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
