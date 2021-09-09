import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
});

const ListContainer = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        {categories.map((e) => (
          <ListItem button key={e.text}>
            {e.icon && <ListItemIcon>{e.icon}</ListItemIcon>}
            <ListItemText primary={e.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const MenuDrawer = ({ state, setState, categories }) => {
  return (
    <Drawer
      anchor={"left"}
      open={state}
      onClose={() => setState((prevState) => setState(!prevState))}
    >
      <ListContainer categories={categories} />
    </Drawer>
  );
};

export default MenuDrawer;
