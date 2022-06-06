import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Progressbar from "./components/Progressbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
var count = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "firstPage",
      currentActive: "0",
      startDate: new Date(),
      endDate: new Date(),
      width: "0%",
      oneActive: false,
      twoActive: false,
      buttonDisable: false,
      yetiskin: 0,
      cocuk: 0,
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChangeYetiskin = this.handleChangeYetiskin.bind(this);
    this.handleChangeCocuk = this.handleChangeCocuk.bind(this);
  }

  handleClick = () => {
    console.log(this.state.startDate);
    if (count === 0) {
      let currentActive = "1";
      let width = "50%";
      let route = "infoPage";
      let oneActive = true;
      this.setState({ currentActive, width, route, oneActive });
    }
    if (count === 1) {
      let currentActive = "2";
      let width = "100%";
      let route = "paymentPage";
      let twoActive = true;
      this.setState({ currentActive, width, route, twoActive });
    }

    if (count === 2) {
      let route = "finalPage";
      let buttonDisable = true;
      this.setState({ route, buttonDisable });
    }
    count++;
  };

  backClick = () => {
    count--;
    if (count === 0) {
      let currentActive = "1";
      let width = "0%";
      let route = "firstPage";
      let oneActive = false;
      let twoActive = false;
      this.setState({ currentActive, width, route, oneActive, twoActive });
    }
    if (count === 1) {
      let currentActive = "2";
      let width = "50%";
      let route = "infoPage";
      let oneActive = true;
      let twoActive = false;
      this.setState({ currentActive, width, route, oneActive, twoActive });
    }
    if (count === 2) {
      let currentActive = "2";
      let width = "100%";
      let route = "paymentPage";
      let oneActive = true;
      let twoActive = true;
      let buttonDisable = false;
      this.setState({
        currentActive,
        width,
        route,
        oneActive,
        twoActive,
        buttonDisable,
      });
    }
    if (count === 3) {
      let route = "finalPage";
      let buttonDisable = false;
      this.setState({ route, buttonDisable });
    }
    if (count === 4) {
      let buttonDisable = false;
      this.setState({ buttonDisable });
    }
  };

  handleStartDateChange(startDate) {
    this.setState({ startDate: startDate });
    console.log(startDate);
  }

  handleEndDateChange(endDate) {
    this.setState({ endDate: endDate });
    console.log(endDate);
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }

  handleChangeYetiskin(e) {
    this.setState({ yetiskin: e.target.value });
  }

  handleChangeCocuk(e) {
    this.setState({ cocuk: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <div className="container">
            <div className="progress-container">
              <div
                style={{ width: this.state.width }}
                className="progress"
                id="progress"
              ></div>
              <div className="circles active">
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div
                className={`${
                  this.state.oneActive ? "circles active" : "circles"
                }`}
              >
                <i className="fa-solid fa-bed"></i>
              </div>
              <div
                className={`${
                  this.state.twoActive ? "circles active" : "circles"
                }`}
              >
                <i className="fa-regular fa-credit-card"></i>
              </div>
            </div>
          </div>
        </div>
        {this.state.route === "firstPage" ? (
          <div>
            <form className="date-form" onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <div>
                  <label>Giriş Tarihi</label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartDateChange}
                    dateFormat="dd MMMM yyyy"
                  />
                </div>
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <label>Çıkış Tarihi</label>
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleEndDateChange}
                    dateFormat="dd MMMM yyyy"
                  />
                </div>
                <div>
                  <label className="yetiskin-select">Yetişkin Sayısı</label>
                  <select
                    onChange={this.handleChangeYetiskin}
                    name=""
                    id="yetiskin"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <label className="cocuk-select">Çocuk Sayısı</label>
                  <select onChange={this.handleChangeCocuk} name="" id="cocuk">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        ) : this.state.route === "infoPage" ? (
          <div>
            <div className="infobox">
              <div className="infobox-top">
                <p>Otel İsmi</p>
              </div>
              <div className="infobox-bot">
                <p>
                  Giriş Tarihi : {this.state.startDate.toLocaleDateString()}
                </p>
                <p>Çıkış Tarihi: {this.state.endDate.toLocaleDateString()}</p>
                <p>Yetişkin : {this.state.yetiskin}</p>
                <p>Çocuk: {this.state.cocuk}</p>
              </div>
            </div>
            <div className="selectview"></div>
          </div>
        ) : this.state.route === "paymentPage" ? (
          <div className="paymentbox">
            <h1>Payment Page</h1>
          </div>
        ) : (
          <div className="finalbox">
            <h1>Final Page </h1>
          </div>
        )}
        <div className="footer-div">
          <button
            onClick={this.backClick}
            className={`${
              this.state.oneActive
                ? "back-footer-button"
                : this.state.twoActive
                ? "back-footer-button"
                : "invis-button"
            }`}
          >
            Geri
          </button>
          <button
            onClick={this.handleClick}
            className={`${
              this.state.buttonDisable
                ? "first-footer-button disabled-button"
                : "first-footer-button"
            }`}
          >
            Kaydet ve Devam Et
          </button>
        </div>
      </div>
    );
  }
}

export default App;
