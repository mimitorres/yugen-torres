import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography, Backdrop } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems:'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  spinner: {
    color: '#ff8e53',
  },
  text: {
    color: 'ivory',
    fontVariantCaps:'petite-caps',
  },
}));

const Loading = ({state}) => {
  const classes = useStyles();

  return (
    <>
      <Backdrop
        className={classes.backdrop}
        open={state}
      >
        <div className={classes.root}>
          <CircularProgress className={classes.spinner} />
          <Typography variant="h6" className={classes.text}>Getting everything ready!</Typography>
        </div>
      </Backdrop>
    </>
  );
};

Loading.propTypes = {
    state: PropTypes.bool.isRequired,
}

export default Loading;
