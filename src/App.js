import { Container, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ROUTES } from "./routes/routes";
import NavBar from "./component/navbar/NavBar";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import FilteredProducts from "./pages/FilteredProducts";

import CartContextProvider from "./context/CartContext";
import Cart from "./pages/Cart";

const useStyles = makeStyles({
  appContainer: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    marginTop: "3.5em",
  },
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <CartContextProvider>
        <NavBar />
        <Container className={classes.content} fixed>
          <Switch>
            <Route path={ROUTES.home}>
              <Home setLoading={setLoading} loading={loading} />
            </Route>
            <Route path={ROUTES.product}>
              <ProductDetail setLoading={setLoading} loading={loading} />
            </Route>
            <Route path={ROUTES.category}>
              <FilteredProducts setLoading={setLoading} loading={loading} />
            </Route>
            <Route path={ROUTES.cart}>
              <Cart/>
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="*">
              <Typography variant="h2">Not found! (｡•́︿•̀｡) </Typography>
            </Route>
          </Switch>
        </Container>
      </CartContextProvider>
    </Router>
  );
};

export default App;
