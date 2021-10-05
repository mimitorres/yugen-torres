import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Counter from "../counter/Counter";

const useStyles = makeStyles({
  row: {
    display: "flex",
    maxWidth: "35em",
  },
  image:{
      maxWidth: "12em",
  },
  detail:{
    display: "flex",
    flexDirection: "column",
  },
  count:{
      maxWidth: "10em",
  }
});

const CartItem = ({product}) => {
  const classes = useStyles();
  return (
    <Card className={classes.row}>
      <CardMedia
        component="img"
        image={product.imageUrl}
        alt={product.title}
        className={classes.image}
      />
      <Box className={classes.detail}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {product.title}
          </Typography>
          <Typography component="div" variant="h6">
            {product.price}
          </Typography>
          <Counter itemCount={product.quantity} className={classes.count}/>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CartItem;
