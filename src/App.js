import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";

import { Cards, Chart, CountryPicker } from "./components";
export default class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data,
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker data={data} />
        <Chart data={data} />
      </div>
    );
  }
}
