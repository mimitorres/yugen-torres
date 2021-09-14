import { makeStyles, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    maxWidth: "60em",
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const ProductDetail = ({ product }) => {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <div className={classes.root}>
      <Typography variant="h2">WIP: This will show Product #{id} </Typography>
    </div>
  );
};

export default ProductDetail;
