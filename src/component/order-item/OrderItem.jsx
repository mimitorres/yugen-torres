import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  styled,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    minWidth: "50em",
    margin: "0.2em",
    maxHeight: "7.5em",
    backgroundColor: '#fff9f6',
    boxShadow: "none",
  },
  image: {
    minWidth: "10em",
    minHeight: "7em",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "-webkit-fill-available",
  },
  title: {
    width: "10em",
    textAlign: "center",
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "600",
  },
});

const OrderItem = ({ product }) => {
  const classes = useStyles();

  const getSubtotal = () => {
    return (
      Math.round((product.price * product.quantity + Number.EPSILON) * 100) /
      100
    );
  };

  return (
    <Card className={classes.container}>
      <CardMedia
        image={product.image}
        title={product.title}
        className={classes.image}
      />
      <CardContent className={classes.row}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          className={classes.title}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.quantity}pcs
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          ${getSubtotal()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
