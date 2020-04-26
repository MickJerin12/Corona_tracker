import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
export default class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
