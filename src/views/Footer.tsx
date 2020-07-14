import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      margin: '10px',
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer style={{}}>
      <Grid container>
        <Grid item xs={12}>
          <h1 style={{ textAlign: 'center' }}>Footer</h1>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p>First line</p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <p>Second line</p>
          </Paper>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
