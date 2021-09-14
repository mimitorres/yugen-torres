import { useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ROUTES } from "./routes/routes";
import ItemListContainer from "./component/item-list-container/ItemListContainer";
import Loading from "./component/loading/Loading";
import NavBar from "./component/navbar/NavBar";
import ProductDetail from "./component/product-detail/ProductDetail";

const useStyles = makeStyles({
  appContainer: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    marginTop: "1em",
  },
});

const App = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    console.log("Fetching products");
    await fetch("https://run.mocky.io/v3/2335a993-c832-4cb8-a48a-9310739af0f8")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  };

  return (
    <Router>
      <div className={classes.appContainer}>
        <NavBar />
        <Container className={classes.content}>
          <Switch>
            <Route path={ROUTES.home}>
              <ItemListContainer products={products} />
            </Route>
            <Route path={ROUTES.product}>
              <ProductDetail />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Container>

        <Loading state={loading} />
      </div>
    </Router>
  );
};

export default App;
