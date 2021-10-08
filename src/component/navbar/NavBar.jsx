import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import MenuDrawer from "../menu-drawer/MenuDrawer";
import CartWidget from "../cart-widget/CartWidget";
import { ROUTES } from "../../routes/routes";

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
    fontSize: "1.7em",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  widget: {
    alignSelf: "end",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);
  const [categories, setCategories] = useState([]);
  const { products } = useContext(CartContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection).then((querySnapshot) => {
      querySnapshot.empty
        ? console.error("No hay categorias")
        : setCategories(
            querySnapshot.docs.map((doc) => ({ fsId: doc.id, ...doc.data() }))
          );
    });
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.navbar}>
        <Box className={classes.content}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
            onClick={() => setDrawerState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Link to={ROUTES.home} variant="h6" className={classes.title}>
            幽玄
          </Link>
        </Box>
        {products.length > 0 && <CartWidget className={classes.widget} />}
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
