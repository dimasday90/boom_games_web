import React, { useContext } from "react";
import { Skeleton } from "@material-ui/lab";
import { Grid, Card, CardContent } from "@material-ui/core";
import ThemeContext from "../context/ThemeContext";

export default function SkeletonGameItems() {
  const theme = useContext(ThemeContext);
  return (
    <div id="games-container">
      <Grid container wrap="wrap" spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card
            className="card"
            style={theme.phantom ? { backgroundColor: "grey" } : {}}
          >
            <Skeleton animation="wave" variant="rect" height={560} />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card
            className="card"
            style={theme.phantom ? { backgroundColor: "grey" } : {}}
          >
            <CardContent>
              <Skeleton
                animation="wave"
                height={50}
                style={{ marginBottom: 7 }}
              />
              <Skeleton animation="wave" height={10} width="14%" />
              {Array.from(new Array(9)).map(skeleton => (
                <Skeleton
                  animation="wave"
                  height={20}
                  width="100%"
                  key={skeleton}
                />
              ))}
              {Array.from(new Array(4)).map(item => (
                <>
                  <Skeleton
                    animation="wave"
                    height={30}
                    width="20%"
                    key={item}
                  />
                  <Grid container wrap="wrap" direction="row">
                    {Array.from(new Array(3)).map((chip, i) => (
                      <>
                        <Skeleton
                          className="chip"
                          key={i}
                          animation="wave"
                          height={40}
                          width="10%"
                        />
                      </>
                    ))}
                  </Grid>
                </>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid container wrap="wrap" spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card
              className="card"
              style={theme.phantom ? { backgroundColor: "grey" } : {}}
            >
              <CardContent>
                <Skeleton animation="wave" height={30} width="20%" />
                <Grid container wrap="wrap" direction="row">
                  {Array.from(new Array(5)).map((chip, i) => (
                    <>
                      <Skeleton
                        className="chip"
                        key={i}
                        animation="wave"
                        height={40}
                        width="3%"
                      />
                    </>
                  ))}
                </Grid>
                <br />
                <Skeleton animation="wave" height={30} width="20%" />
                <Grid container wrap="wrap" direction="row">
                  {Array.from(new Array(12)).map((chip, i) => (
                    <>
                      <Skeleton
                        className="chip"
                        key={i}
                        animation="wave"
                        height={40}
                        width="10%"
                      />
                    </>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* {Array.from(new Array(2)).map((item, i) => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={i}>
            <Card className="card"
              style={theme.phantom ? {backgroundColor: 'grey'}
              : {}
              }
            >
              <Skeleton animation="wave" variant="rect" height={560} />
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
        ))} */}
      </Grid>
    </div>
  );
}
