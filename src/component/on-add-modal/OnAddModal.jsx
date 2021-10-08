import React from "react";
import { styled } from "@material-ui/styles";
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
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "0 0 1.5em",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    maxWidth: "10em",
    width: "100%",
    textTransform: "none",
    fontWeight: "600",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiTypography-h6": {
      fontSize: "1.5em",
      textAlign: "center",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "600",
    },
  "& .MuiDialogContentText-root": {
    fontSize: "1em",
    textAlign: "center",
    color: "slategrey",
    fontWeight: "500",
  },
}));

const OnAddModal = ({ open, setOpen, itemCount }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomDialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
    >
      <DialogTitle className={classes.title}>
        {"Product added to cart!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {itemCount} {itemCount > 1 ? "products were" : "product was"} added to
          the cart. How would you like to continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.buttonContainer}>
        <Button className={classes.button}>
          <Link to={"/home"} className={classes.link}>
            keep shopping
          </Link>
        </Button>
        <Button className={classes.button}>
          <Link to={"/cart"} className={classes.link}>
            finish my order
          </Link>
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default OnAddModal;
