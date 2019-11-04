import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [input, setInput] = useState("bitcoin");

  const handleChange = e => {
    e.preventDefault();
    setInput(e.target.value);
  };

  //https://api.coingecko.com/api/v3/coins/${input}
  //https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, [input]);

  return (
    <div className="App">
      <Navbar input={input} handleChange={handleChange} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
