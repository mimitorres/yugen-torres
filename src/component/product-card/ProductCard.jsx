import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width:"100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "1em",
  },
  media: {
    height: 250,
  },
  productText: {
    textAlign: "center",
  },
  openButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    maxWidth: "15em",
    width: "100%",
    marginTop: "auto",
    marginBottom: "1em",
    padding: "0.5em",
    textDecoration: "none !important",
    textAlign: "center",
    fontFamily: "Quicksand",
    fontWeight: "600",
  },
  title:{
    fontWeight: "600",
    color: "slategrey",
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.title}
        />
        <CardContent className={classes.productText}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/product/${product.fsId}`} className={classes.openButton}>
        more
      </Link>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }),
};

export default ProductCard;
