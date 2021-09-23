import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  link:{
    textDecoration: "none",
    color: "inherit",
  },
});

const ListContainer = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        {categories.map((c) => (
          <ListItem button key={c.id}>
            {c.icon && <ListItemIcon>{c.icon}</ListItemIcon>}
            <NavLink to={`/category/${c.id}`} className={classes.link}>{c.text}</NavLink>
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

ListContainer.propTypes = {
  categories: PropTypes.array.isRequired,
}

MenuDrawer.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

export default MenuDrawer;
