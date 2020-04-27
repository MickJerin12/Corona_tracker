import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import GenericCard from "./GenericCard";
import classNames from "classnames";

const Cards = ({ data, lastUpdate }) => {
  if (!data.confirmed) {
    return "Loading....";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {Object.keys(data).map((item) => (
          <GenericCard
            type={item}
            value={data[item].value}
            lastUpdate={lastUpdate}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
