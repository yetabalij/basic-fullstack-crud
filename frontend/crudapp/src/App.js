import React from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
//import Edit from "./pages/Edit";

//material-ui imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: 20,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Car Info!
              </Typography>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/register" className={classes.link}>
                Register
              </Link>
            </Toolbar>
          </AppBar>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
