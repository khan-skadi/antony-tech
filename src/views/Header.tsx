import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import banner5 from '../assets/images/banner/banner5.jpg';
import banner4 from '../assets/images/banner/banner4.png';
import banner3 from '../assets/images/banner/banner3.jpg';
import banner2 from '../assets/images/banner/banner2.jpg';
import banner1 from '../assets/images/banner/banner1.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hero: {
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${banner3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    },
    heroInner: {}
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.heroInner}>
        <h1>Header</h1>
      </div>
    </section>
  );
};

export default Header;
