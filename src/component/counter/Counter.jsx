import { Box, Divider, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
    countRoot: {
        padding: "2px 4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "12em",
        width: "100%",
      },
      input: {
        textAlign: "center",
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
}));

const Counter = ({addItem, removeItem, itemCount, stock}) => {

  const classes = useStyles();
  return (
    <Box className={classes.countRoot}>
      <IconButton
        className={classes.iconButton}
        onClick={() => removeItem()}
        disabled={itemCount === 1}
      >
        <Remove />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Typography className={classes.input} variation="body2">
        {itemCount}
      </Typography>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        className={classes.iconButton}
        onClick={() => addItem()}
        disabled={itemCount >= stock}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default Counter;
