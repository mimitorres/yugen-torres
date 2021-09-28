import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Slide,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    fontVariantCaps: "all-small-caps",
    maxWidth: "10em",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  buttonContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "2em",
  },
});

const OnAddModal = ({ open, setOpen, itemCount }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogTitle>{"Product added to cart!"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {itemCount} {itemCount > 1 ? "products were" : "product was"} added to
          the cart. What would you like to continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.buttonContainer}>
        <Button className={classes.button}>
          <Link to={"/home"} className={classes.link}>Keep shopping!</Link>
        </Button>
        <Button className={classes.button}>
          <Link to={"/cart"} className={classes.link}>Finish my order</Link>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OnAddModal;
