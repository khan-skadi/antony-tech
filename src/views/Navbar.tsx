import React, { useState } from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';

import logo from '../assets/logo/at-logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: theme.palette.primary.main,
      zIndex: theme.zIndex.drawer + 101
    },
    navToolbar: {
      height: '100%'
    },
    menuButton: {
      color: '#fff'
    },

    toolbar: theme.mixins.toolbar,
    logoText: {
      fontFamily: '"Barlow", sans-serif',
      fontSize: '20px',
      color: '#fff',
      marginLeft: theme.spacing(1)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    navList: {
      backgroundColor: 'rgba(101, 115, 195, .9)',
      '& > li > div > span': {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '16px',
        lineHeight: '30px',
        background: 'transparent',
        textAlign: 'left',
        color: '#fff'
      }
    },
    navListDesktop: {
      display: 'flex',
      flexDirection: 'row',
      whiteSpace: 'nowrap',
      '& li:hover': {
        backgroundColor: 'rgba(101, 115, 195, .9)'
      }
    },
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    },
    drawer: {
      color: '#e0e0e0'
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
    }
  })
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface ObjectLiteral {
  [key: string]: any;
}

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuBool, setMenuBool] = useState(false);

  const toggleMenu = () => {
    setMenuBool(!menuBool);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleMenu}
      onKeyDown={toggleMenu}
    >
      <List className={classes.navList}>
        <ListItem button component="li">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="li">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component="li">
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button component="li">
          <ListItemText primary="Book Now" />
        </ListItem>
        <ListItem button component="li">
          <ListItemText primary="Gallery" />
        </ListItem>
      </List>
    </div>
  );

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Drawer
      className={classes.drawer}
      anchor={'top'}
      open={menuBool}
      onClose={toggleMenu}
    >
      <div className={classes.toolbar} />
      {list('top')}
    </Drawer>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.navToolbar}>
          <img src={logo} alt="logo" width="48" height="48" />
          <Typography
            className={classes.logoText}
            variant="body1"
            color="textPrimary"
            noWrap
          >
            Antony Tech
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <List className={classes.navListDesktop}>
              <ListItem button component="li">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component="li">
                <ListItemText primary="About Us" />
              </ListItem>
              <ListItem button component="li">
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem button component="li">
                <ListItemText primary="Book Now" />
              </ListItem>
              <ListItem button component="li">
                <ListItemText primary="Gallery" />
              </ListItem>
            </List>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              className={classes.menuButton}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;
