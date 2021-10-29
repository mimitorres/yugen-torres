import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Paper, TextField, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import { ROUTES } from "../routes/routes";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50em",
    minHeight: "30em",
    height: "fit-content",
  },
  title: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "start",
    fontWeight: "bold",
    padding: "1.2em 0",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    textAlign: "center",
    fontSize: "1em",
    textTransform: "none",
    fontWeight: "bold",
    boxShadow: "2px 2px 5px lightslategrey",
    maxWidth: "5em",
    width: "100%",
    padding: "0.5em",
    margin: "1em",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "25em",
  },
  fields: {
    width: "20em",
    marginBottom: "1em",
    color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const validationSchema = yup.object({
  buyerName: yup
    .string("Enter your name")
    .min(4, "Name should be of minimum 4 characters length")
    .required("Name is required"),
  buyerLastName: yup
    .string("Enter your last name")
    .min(2, "Last name should be of minimum 4 characters length")
    .required("Last Name is required"),
  buyerEmail: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  buyerPhone: yup
    .string("Enter your phone number")
    .min(8, "Phone should have at least 8 characters")
    .matches(/^[0-9]+$/g, "Not a valid phone")
    .required("Phone is required"),
  buyerRepeatEmail: yup
    .string("Repeat your email")
    .required("Email confirmation is required")
    .when('buyerEmail', (buyerEmail) => {
      if (buyerEmail) {
          return yup
          .string()
          .required("Email confirmation is required")
          .matches(buyerEmail, "Must match your previous email");
      }
  }),
});

const Checkout = () => {
  const classes = useStyles();
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      buyerName: "",
      buyerLastName: "",
      buyerEmail: "",
      buyerRepeatEmail: "",
      buyerPhone: "",
    },
    validateOnMount: false,
    validationSchema: validationSchema,
    onSubmit: (values) => createOrder(values),
  });

  const getProductsSubtotal = () => {
    let subtotal = 0;
    products.forEach((p) => (subtotal += p.price * p.quantity));
    return Math.round((subtotal + Number.EPSILON) * 100) / 100;
  };

  const { products, clearCart } = useContext(CartContext);

  const createOrder = (values) => {
    //Data to post
    const order = {
      buyer: {
        name: values.buyerName,
        lastName: values.buyerLastName,
        email: values.buyerEmail,
        phone: values.buyerPhone,
      },
      items: products.map((p) => ({
        id: p.fsId,
        price: p.price,
        title: p.title,
        image: p.imageUrl,
        quantity: p.quantity,
      })),
      orderStatus: "created",
      total: getProductsSubtotal(),
      date: new Date(),
    };

    // Add a new document with a generated id.
    addDoc(collection(db, "orders"), order)
      .then((ref) => {
        console.log("Document written with ID: ", ref.id);
        clearCart();
        history.push(`/order/${ref.id}/success`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Box className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <Typography className={classes.title} variant="h4">
          CONTACT INFORMATION
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            id="buyerName"
            name="buyerName"
            label="First Name"
            className={classes.fields}
            color="secondary"
            value={formik.values.buyerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.buyerName && Boolean(formik.errors.buyerName)}
            helperText={formik.touched.buyerName && formik.errors.buyerName}
          />
          <TextField
            id="buyerLastName"
            name="buyerLastName"
            label="Last Name"
            className={classes.fields}
            color="secondary"
            value={formik.values.buyerLastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.buyerLastName && Boolean(formik.errors.buyerLastName)}
            helperText={formik.touched.buyerLastName && formik.errors.buyerLastName}
          />

          <TextField
            id="buyerEmail"
            name="buyerEmail"
            label="Email"
            className={classes.fields}
            color="secondary"
            value={formik.values.buyerEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.buyerEmail && Boolean(formik.errors.buyerEmail)
            }
            helperText={formik.touched.buyerEmail && formik.errors.buyerEmail}
          />
          <TextField
            id="buyerRepeatEmail"
            name="buyerRepeatEmail"
            label="Repeat Email"
            className={classes.fields}
            color="secondary"
            value={formik.values.buyerRepeatEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.buyerRepeatEmail && Boolean(formik.errors.buyerRepeatEmail)
            }
            helperText={formik.touched.buyerRepeatEmail && formik.errors.buyerRepeatEmail}
          />
          <TextField
            id="buyerPhone"
            name="buyerPhone"
            label="Phone"
            className={classes.fields}
            color="secondary"
            value={formik.values.buyerPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.buyerPhone && Boolean(formik.errors.buyerPhone)
            }
            helperText={formik.touched.buyerPhone && formik.errors.buyerPhone}
          />

          <Button
            className={classes.button}
            disabled={!formik.isValid}
            type="submit"
          >
            buy!
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Checkout;
