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
import Loading from "../component/loading/Loading";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
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
  detailContainer: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 0 auto",
  },
  title: {
    textAlign: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  description: {
    whiteSpace: "pre-wrap",
    padding: "2em",
    textAlign: "left",
  },
  price: {
    textAlign: "center",
    color: "white",
    background: "linear-gradient(45deg, #FF8E53 50%, #FE6B8B 90%)",
    width: "100%",
    opacity: "65%",
    borderRadius: "10px",
    maxWidth: "10em",
    marginTop: "auto",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
});

const ProductDetail = ({ setLoading, loading }) => {
  const classes = useStyles();
  let { id } = useParams();
  let history = useHistory();
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    setLoading(true);
    getItem(id);
  }, []);

  const getItem = (id) => {
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
      case "4":
        fetch("https://run.mocky.io/v3/5c30c425-aeb2-4fe6-bace-1edb001f1992")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "5":
        fetch("https://run.mocky.io/v3/4ae8d8f2-8af5-4187-9e14-df045af9efb7")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "6":
        fetch("https://run.mocky.io/v3/ddf629c1-82c5-45c8-b931-e959e4749ef3")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "7":
        fetch("https://run.mocky.io/v3/701d762b-7607-4cfe-8fcf-72cc99c61490")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "8":
        fetch("https://run.mocky.io/v3/826c3397-0a37-4498-bb47-46b0553741a3")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "9":
        fetch("https://run.mocky.io/v3/ed914520-eabf-4067-bbe2-a7f7be99704b")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      default:
        break;
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return !loading ? (
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
          <CardContent className={classes.cardContent}>
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
  ) : (
    <Loading state={loading} />
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
