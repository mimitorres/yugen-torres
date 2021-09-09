import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import ItemCount from "../item-count/ItemCount";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    margin: "1em",
  },
  media: {
    height: 250,
  },
  productText: {
    textAlign: "center",
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
          <Typography gutterBottom variant="h6" component="h2">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemCount product={product} />
    </Card>
  );
};

export default ProductCard;
