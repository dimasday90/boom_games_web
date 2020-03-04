import React from "react";
import {
  Skeleton 
}from "@material-ui/lab";
import {
  Grid,
  Card,
  CardContent
} from '@material-ui/core'

export default function SkeletonGameItems() {
  return (
    <div id="games-container">
      <Grid container wrap="wrap" spacing={3}>
        {Array.from(new Array(4)).map((item, i) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={i}>
            <Card className="card">
              <Skeleton animation="wave" variant="rect" height={200} />
              <CardContent>
                <Skeleton
                  animation="wave"
                  height={50}
                  style={{ marginBottom: 7 }}
                />
                <Grid container wrap="wrap" direction="row">
                  {Array.from(new Array(3)).map((chip, i) => (
                    <Skeleton
                      className="chip"
                      key={i}
                      animation="wave"
                      height={40}
                      width="20%"
                    />
                  ))}
                </Grid>
                <Skeleton animation="wave" height={30} width="60%" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
