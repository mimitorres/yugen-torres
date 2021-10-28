import { Box, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { isEmpty } from "lodash";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container:{
    display:"flex",
    textAlign:"center",
    flexDirection:"column",
  },
  accent:{
    textAlign: "center",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight:"600",
  },
});

const OrderSuccess = ({ loading, setLoading }) => {
  const classes = useStyles();
  const [currentOrder, setCurrentOrder] = useState({});
  const [orderedProducts, setOrderedProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOrder(id).catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if(!isEmpty(currentOrder)){
      getOrderProducts(currentOrder.items).then(products => {
        setOrderedProducts(products);
      }).catch((e) => console.error(e));
    }
  }, [currentOrder]);

  const getOrder = async(id) => {
    const orderRef = doc(db, "orders", id);
    const orderSnap = await getDoc(orderRef);

    setCurrentOrder({ ...orderSnap.data() , id: orderSnap.id });
    setLoading(false);
  };

  const getOrderProducts = async(products) => {
    let orderProducts = [];
    products.forEach(p => {
      getProduct(p.id).then(p => orderProducts.push(p));
    });

    return orderProducts;
  };

  const getProduct = async(id) => {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);

    return { ...productSnap.data(), fsId: productSnap.id };
  };

  return !isEmpty(currentOrder) && (
    <Box>
      <Paper className={classes.container}>
          <Typography variant="h5">
            {currentOrder.buyer.name} {currentOrder.buyer.lastName} 
          </Typography>
          <Typography  variant="h5">
            Your order <span className={classes.accent}>#{currentOrder.id}</span> was generated!
          </Typography> 
          {orderedProducts?.map(p => <Typography key={p.title}>{p.title}</Typography>)}
      </Paper>
    </Box>
  );
};

export default OrderSuccess;
