import {
  Box,
  Button,
  Divider,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isEmpty } from "lodash";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { makeStyles } from "@material-ui/styles";
import OrderList from "../component/order-list/OrderList";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "-webkit-fill-available",
  },
  paper: {
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  accent: {
    textAlign: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "600",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "600",
  },
  homeButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    maxWidth: "13em",
    width: "100%",
    margin: "1em 0",
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  totalContainer:{
    width:"fill-available",
  },
  // total:{
  //   display:"flex",
  //   width:"fill-available",
  // },
});
const CustomButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-label": {
    fontFamily: "Quicksand",
    textTransform: "none",
  },
}));

const OrderSuccess = ({ loading, setLoading }) => {
  const classes = useStyles();
  const [currentOrder, setCurrentOrder] = useState({});
  const [orderTotal, setOrderTotal] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOrder(id).catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    setOrderTotal(getTotal());
  }, [currentOrder])

  const getOrder = async (id) => {
    const orderRef = doc(db, "orders", id);
    const orderSnap = await getDoc(orderRef);

    setCurrentOrder({ ...orderSnap.data(), id: orderSnap.id });
    setLoading(false);
  };

  const getTotal = () => {
    let total = 0;
    currentOrder.items?.forEach((i) => total = total + i.price);
    return Math.round((total + Number.EPSILON) * 100) / 100;
  };

  return (
    !isEmpty(currentOrder) && (
      <Box className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h5">
            {currentOrder.buyer.name} {currentOrder.buyer.lastName}
          </Typography>
          <Typography variant="h5">
            Your order{" "}
            <span className={classes.accent}>#{currentOrder.id}</span> was
            generated!
          </Typography>
          <OrderList list={currentOrder.items} />
          {/* <Divider />
            <Box className={classes.total}>
              <Typography variant="h5">Total:</Typography>
              <Typography variant="h5">{orderTotal}</Typography>
            </Box> */}
          <CustomButton size="medium" className={classes.homeButton}>
            <Link to={ROUTES.home} className={classes.link}>
              back home!
            </Link>
          </CustomButton>
        </Paper>
      </Box>
    )
  );
};

export default OrderSuccess;
