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
import { styled } from "@material-ui/styles";
import { ArrowBack } from "@material-ui/icons";
import { useParams, useHistory, Link } from "react-router-dom";
import PropTypes from "prop-types";

import ItemCount from "../component/item-count/ItemCount";
import Loading from "../component/loading/Loading";
import OnAddModal from "../component/on-add-modal/OnAddModal";
import NotFound from "../pages/NotFound";
import { CartContext } from "../context/CartContext";
import { ROUTES } from "../routes/routes";

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

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
    maxHeight: "40em",
  },
  imageContainer: {
    maxWidth: "35em",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflowY: "auto",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "600",
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
    maxWidth: "13em",
    width: "100%",
    margin: "1em 0 1.5em",
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "600",
  },
  count: {
    margin: "0.5em 0",
  },
});

const ProductDetail = ({ setLoading, loading }) => {
  let { id } = useParams();
  let history = useHistory();
  const classes = useStyles();
  const { addProduct, isInCart } = useContext(CartContext);

  const [currentProduct, setCurrentProduct] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [itemCount, setItemCount] = useState(1);
  const [productNotFound, setProductNotFound] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getItem(id);
    // eslint-disable-next-line
  }, []);

  const onAddItem = () => {
    addProduct(currentProduct, itemCount);
    setModalOpen(true);
  };

  const CustomButton = styled(Button)(({ theme }) => ({
    "& .MuiButton-label": {
      fontFamily: "Quicksand",
      textTransform: "none",
    },
  }));

  const getItem = async (id) => {
    const prodRef = doc(db, "products", id);
    const prodSnap = await getDoc(prodRef);

    if (prodSnap.exists()) {
      const product = getSanitizedProduct(prodSnap);
      setCurrentProduct(product);
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
      setProductNotFound(true);
    }
  };

  const getSanitizedProduct = (productSnap) => {
    const data = productSnap.data();
    return { ...data, fsId: productSnap.id, description: data.description.replaceAll("\\n", "\n") };
  };

  return !loading ? (
    !productNotFound ? (<Box className={classes.root}>
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
            <Box className={classes.description}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {currentProduct.description}
              </Typography>
            </Box>
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
              <CustomButton size="medium" className={classes.onCartButton}>
                <Link to={ROUTES.cart} className={classes.link}>
                  go to cart!
                </Link>
              </CustomButton>
            </Box>
          )}
        </Box>
      </Card>
      {modalOpen && (
        <OnAddModal
          open={modalOpen}
          setOpen={setModalOpen}
          itemCount={itemCount}
        />
      )}
    </Box>) : <NotFound/>
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
