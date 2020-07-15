import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import shoes from "../shoes.json"

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: 2,
        textAlign: 'center',
        color: "secondary",
    }
})

function Shoes () {
    const classes = useStyles();
    const { id } = useParams();
    const shoe = shoes[id];
    if (!shoe.name) {
        return <h2>Product Not Found</h2>
    }
    const { name, img } = shoe;
    return (
        <div style={{ textAlign: "center" }}>
            <h2>{name}</h2>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper}>
                        <img src={img[0]} alt={name} width={500} height={500} style={{ margin: "10px" }} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Shoes;