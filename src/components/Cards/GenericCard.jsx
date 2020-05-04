import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import classNames from "classnames";

export const CardGeneric = ({ type, value, lastUpdate }) => {
  if (type === "deaths") {
    var death = true;
  } else if (type === "lastUpdate") {
    var notVisible = true;
  }

  return (
    <div>
      {!notVisible && (
        <Grid
          item
          component={Card}
          xs={12}
          md={10}
          className={classNames(styles.card, {
            [styles.infected]: type === "confirmed",
            [styles.recovered]: type === "recovered",
            [styles.deaths]: type === "deaths",
          })}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {type.toUpperCase()}
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              {!death
                ? `Number of ${type} cases of COVID-19`
                : `Number of ${type} caused by COVID-19`}
            </Typography>
          </CardContent>
        </Grid>
      )}
    </div>
  );
};

export default CardGeneric;
