import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    color: "white",
    fontVariantCaps: "all-small-caps",
    maxWidth: "15em",
    width: "100%",
    margin: "2em",
  },
});
const EmptyCart = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h3">Nothing on the cart yet! (｡•ˇ‸ˇ•｡)</Typography>
      <Button className={classes.button}>
        <Link to={ROUTES.home} className={classes.link}> Go to main page </Link>
      </Button>
    </Box>
  );
};

export default EmptyCart;
