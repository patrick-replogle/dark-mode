import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
      <select value={props.input} onChange={props.handleChange}>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="xrp">XRP</option>
        <option value="bitcoin-cash">Bitcoin Cash</option>
        <option value="tether">Tether</option>
        <option value="litecoin">Litecoin</option>
        <option value="eos">EOS</option>
        <option value="ripple">Ripple</option>
        <option value="bitcoin-cash-sv">Bitcoin SV</option>
        <option value="stellar">Stellar</option>
      </select>
    </nav>
  );
};

export default Navbar;
