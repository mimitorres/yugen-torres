import { Box, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  border: {
    margin: "0.5em",
    padding: "0.5em",
  },
  title: {
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "start",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    color: "grey",
    justifyContent: "space-between",
  },
  total: {
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "start",
    display: "flex",
    flexDirection: "row",
    color: "grey",
    justifyContent: "space-between",
    marginTop: "0.3em",
  },
  accent: {
    fontWeight: "bold",
  },
});

const OrderSummary = ({ products, totalProducts }) => {
  const classes = useStyles();

  const getProductsSubtotal = () => {
    let subtotal = 0;
    products.forEach((p) => (subtotal += p.price * p.quantity));
    return Math.round((subtotal + Number.EPSILON) * 100) / 100;
  };

  return (
    <Card className={classes.border}>
      <Typography variant="h6" className={classes.title}>
        YOUR ORDER SUMMARY
      </Typography>
      <Box className={classes.content}>
        <Typography variant="body2">{totalProducts} products</Typography>
        <Typography variant="body2">${getProductsSubtotal()}</Typography>
      </Box>
      <Box className={classes.total}>
        <Typography variant="body1" className={classes.accent}>
          Total
        </Typography>
        <Typography variant="body2" className={classes.accent}>
          ${getProductsSubtotal()}
        </Typography>
      </Box>
    </Card>
  );
};

export default OrderSummary;
