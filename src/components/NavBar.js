import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography component={"div"} variant="h6" className={classes.title}>
            <h2><Link to='/' style={{ color: 'white' }}>Shoes Store</Link></h2>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
