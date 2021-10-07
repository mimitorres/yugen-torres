import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

import MenuDrawer from "../menu-drawer/MenuDrawer";
import CartWidget from "../cart-widget/CartWidget";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
    alignContent: "center",
    textDecoration: "none",
    color: "white",
    fontSize: "1.5em",
  },
  navbar: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);
  const [categories, setCategories] = useState([]);
  const {products} = useContext(CartContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categoriesCollection = collection(db, "/categories");
    const categoriesSnapshot = await getDocs(categoriesCollection);
    const categoriesList = categoriesSnapshot.docs.map((doc) => ({ firebaseId: doc.id, ...doc.data()}));
    setCategories(categoriesList);

  //   const categoriesCollection = collection(db,"categories");
  //   categoriesCollection.get().then((querySnapshot) => {
  //     querySnapshot.empty
  //       ? console.log("No hay productos")
  //       : setCategories(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
  //   });
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.navbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={() => setDrawerState(true)}
        >
          <MenuIcon />
        </IconButton>
        <Link to={"/"} variant="h6" className={classes.title}>
          幽玄
        </Link>
        {products.length > 0 && <CartWidget />}
      </Toolbar>
      <MenuDrawer
        state={drawerState}
        setState={setDrawerState}
        categories={categories}
      />
    </AppBar>
  );
};

export default NavBar;
