import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

import { Cards, Chart, CountryPicker } from "./components";
export default class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data,
    });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
    console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} lastUpdate={data.lastUpdate} />
        <CountryPicker
          data={data}
          handleCountryChange={this.handleCountryChange}
        />
        <Chart data={data} country={country} />
      </div>
    );
  }
}
