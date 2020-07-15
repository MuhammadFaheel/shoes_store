import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import shoes from '../shoes.json';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  paper: {
    textAlign: 'center',

  }
});

function Home (){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {Object.entries(shoes).map(([shoe, { name, img }]) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={img[0]}
                    title={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`shoes/${shoe}`} style={{ "textDecoration": "none" }}>
                    Full Screen
                  </Link>
                </CardActions>
              </Card >
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
};

export default Home;