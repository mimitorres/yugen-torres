import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import MenuDrawer from '../menu-drawer/MenuDrawer';
import CartWidget from '../cart-widget/CartWidget';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    navbar:{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
    },
  }));

const NavBar = () => {
    const classes = useStyles()

    const [drawerState, setDrawerState] = useState(false)

    const categories =[
        {
            text: "Remeras",
        },
        {
            text: "Pantalones"
        },
        {
            text: "Buzos"
        }
    ]
  
    return (
     <AppBar position = "sticky">
      <Toolbar className={classes.navbar}>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={() => setDrawerState(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
            幽玄
        </Typography>
        <CartWidget/>
      </Toolbar>
      <MenuDrawer state={drawerState} setState={setDrawerState} categories={categories}/>
    </AppBar>
  );
};

export default NavBar;
