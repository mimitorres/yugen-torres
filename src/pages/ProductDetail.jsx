import { useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Fab,
} from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import ItemCount from "../component/item-count/ItemCount";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles({
  root:{
    display: "flex",
    justifyContent: "space-around",
  },
  price:{
    textAlign: "center",
    color: "#fe7a73",
    border: "#ff885c 2px solid",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: "70em",
  },
  imageContainer: {
    maxWidth: "35em",
  },
  title: {
    textAlign: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  description: {
    whiteSpace: "pre-wrap",
    padding: "2em",
  },
  button:{
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  }
});

const ProductDetail = ({setLoading}) => {
  const classes = useStyles();
  let { id } = useParams();
  let history = useHistory();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    getItem(id);
  }, []);


  const getItem = id => {
    switch (id) {
      case "1":
        fetch("https://run.mocky.io/v3/e8250b06-aead-41a8-bef7-40b76b1cd9f8")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "2":
        fetch("https://run.mocky.io/v3/cc48552c-fb54-4f11-8174-44ffe7f4313a")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "3":
        fetch("https://run.mocky.io/v3/cf879ac7-457e-4454-a901-4609c9268931")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      default:
        break;
    }
    setLoading(false);
  }

  return (
    <Box className={classes.root}>
      <Fab className={classes.button} onClick={() => history.goBack()}>
        <ArrowBack />
      </Fab>
      <Card className={classes.content}>
        <CardMedia
          component="img"
          className={classes.imageContainer}
          image={currentProduct.imageUrl}
          alt={currentProduct.title}
        />
        <Box className={classes.detailContainer}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h3" className={classes.title}>
              {currentProduct.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              className={classes.description}
            >
              {currentProduct.description}
            </Typography>
            <Typography variant="h5" className={classes.price}>
              {currentProduct.price}
            </Typography>
          </CardContent>
          <ItemCount product={currentProduct} />
        </Box>
      </Card>
    </Box>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};

export default ProductDetail;
