import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navclass">
        <ul>
          <li className="otel-rezervasyon">
            <p>Otel Rezervasyonu</p>
          </li>
          <li className="yeni-reservasyon-buton">
            <button>Yeni Reservasyon Yap</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
