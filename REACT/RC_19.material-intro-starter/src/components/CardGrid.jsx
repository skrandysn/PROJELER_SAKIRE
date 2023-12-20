import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import data from "../data";

export default function CardGrid() {
  return (
    <>
      <Typography variant="h4" align="center" color={"red"} m={3}>
        Card Grid
      </Typography>
      <Grid alignItems="center" justifyContent="center" spacing={2} container>
        {data.map(({ id, name, text, img }) => {
          return (
            <Grid key={id} item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component="img" image={img} alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Button color="primary">Buton</Button>
    </>
  );
}
