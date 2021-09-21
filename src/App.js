import { Container, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ROUTES } from "./routes/routes";
import Loading from "./component/loading/Loading";
import NavBar from "./component/navbar/NavBar";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";

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
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <div className={classes.appContainer}>
        <NavBar />
        <Container className={classes.content}>
          <Switch>
            <Route path={ROUTES.home}>
              <Home setLoading={setLoading} />
            </Route>
            <Route path={ROUTES.product}>
              <ProductDetail setLoading={setLoading}/>
            </Route>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route path="*">
              <Typography variant="h2">Not found! (｡•́︿•̀｡) </Typography>
            </Route>
          </Switch>
        </Container>

        <Loading state={loading} />
      </div>
    </Router>
  );
};

export default App;
