import React from "react";
import {
  Box,
  Button,
  Paper,
  styled,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { ROUTES } from "../../routes/routes";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    height: "25em",
    width: "50em",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Quicksand",
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  icon: {
    height: "10em",
  },
  backButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 10,
    color: "white",
    fontWeight: "bold",
    maxWidth: "13em",
    width: "100%",
    margin: "1em 0 1.5em",
    textAlign: "center",
    fontFamily: "Quicksand",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "600",
  },
});

const CustomButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-label": {
    fontFamily: "Quicksand",
    textTransform: "none",
  },
}));

const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Box>
      <Paper className={classes.iconContainer}>
        <Typography variant="h2" className={classes.text}>
          Nothing on your cart yet...
        </Typography>
        <FontAwesomeIcon icon={faHeartBroken} size="6x" color="#FF8E53" />
        <CustomButton size="medium" className={classes.backButton}>
          <Link to={ROUTES.home} className={classes.link}>
            let's buy!
          </Link>
        </CustomButton>
      </Paper>
    </Box>
  );
};

export default EmptyCart;
