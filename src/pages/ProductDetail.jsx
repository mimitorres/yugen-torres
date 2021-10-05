import { useContext, useEffect, useState } from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
  Fab,
  Button,
} from "@material-ui/core";
import { useParams, useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

import ItemCount from "../component/item-count/ItemCount";
import { ArrowBack } from "@material-ui/icons";
import Loading from "../component/loading/Loading";
import OnAddModal from "../component/on-add-modal/OnAddModal";
import { CartContext } from "../context/CartContext";
import { ROUTES } from "../routes/routes";

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
  onCartBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  onCartButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    fontVariantCaps: "all-small-caps",
    maxWidth: "13em",
    width: "100%",
    margin: "1em",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "500",
  },
  count:{
    margin: "0.5em 0",
  }
});

const ProductDetail = ({ setLoading, loading }) => {
  let { id } = useParams();
  let history = useHistory();
  const classes = useStyles();
  const { addProduct, isInCart } = useContext(CartContext);

  const [currentProduct, setCurrentProduct] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [itemCount, setItemCount] = useState(1);


  useEffect(() => {
    setLoading(true);
    getItem(id);
    // eslint-disable-next-line
  }, []);

  const onAddItem = () => {
    addProduct(currentProduct, itemCount);
    setModalOpen(true);
  };

  const getItem = (id) => {
    switch (id) {
      case "1":
        fetch("https://run.mocky.io/v3/e7135738-2699-4c03-a0e1-5b60aa26177d")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "2":
        fetch("https://run.mocky.io/v3/335551dd-bb9c-49de-bcfc-938cba197bb2")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "3":
        fetch("https://run.mocky.io/v3/4414e49e-7a88-442a-8631-b451e6fa3ac5")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "4":
        fetch("https://run.mocky.io/v3/cdc090f4-f833-4f03-8380-d3dc8b321574")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "5":
        fetch("https://run.mocky.io/v3/548c082e-c3e1-4669-928b-a9033a448261")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "6":
        fetch("https://run.mocky.io/v3/777d243c-680d-45aa-b266-a6b8d48fd9d5")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "7":
        fetch("https://run.mocky.io/v3/4cc33759-75a9-454a-94de-9250b8272a17")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "8":
        fetch("https://run.mocky.io/v3/8904970b-6227-43bc-8b52-14ce2044b3cf")
          .then((res) => res.json())
          .then((data) => setCurrentProduct(data))
          .catch((e) => console.error(e));
        break;
      case "9":
        fetch("https://run.mocky.io/v3/366d43a7-c01f-4abf-af1d-33cd7f9d6285")
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
              ${currentProduct.price}
            </Typography>
          </CardContent>
          {!isInCart(currentProduct.id) ? (
            <ItemCount
              stock={currentProduct.stock}
              onAdd={() => onAddItem()}
              itemCount={itemCount}
              setItemCount={setItemCount}
            />
          ) : (
            <Box className={classes.onCartBox}>
              <Button size="medium" className={classes.onCartButton} >
                <Link to={ROUTES.cart} className={classes.link}>
                  View in cart
                </Link>
              </Button>
            </Box>
          )}
        </Box>
      </Card>
      {modalOpen && 
        <OnAddModal
          open={modalOpen}
          setOpen={setModalOpen}
          itemCount={itemCount}
        />
      }
    </Box>
  ) : (
    <Loading state={loading} />
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};

export default ProductDetail;
