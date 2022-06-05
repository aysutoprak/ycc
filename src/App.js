import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Progressbar from "./components/Progressbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
var count = 0;
const circleList = ["first", "second", "third"];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "firstPage",
      currentActive: "0",
      startDate: new Date(),
      width: "0%",
      oneActive: false,
      twoActive: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleClick = () => {
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
  };

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
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
              <div className="labels">
                <h6>Giriş Tarihi</h6>
                <h6>Çıkış Tarihi</h6>
                <h6>Yetişkin Sayısı</h6>
                <h6>Çocuk Sayısı</h6>
              </div>
              <div className="form-group">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={20}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={20}
                  timeCaption="time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                <select name="" id="yetiskin">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <select name="" id="cocuk">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
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
                <p>Giriş Tarihi : 10.8.2022</p>
                <p>Çıkış Tarihi: 11.9.2022</p>
                <p>Yetişkin : 3</p>
                <p>Çocuk: 4</p>
              </div>
            </div>
            <div className="selectview"></div>
          </div>
        ) : (
          <div className="paymentbox">
            <h1>Payment Page</h1>
          </div>
        )}
        <div className="footer-div">
          <button
            onClick={this.backClick}
            className={`${
              this.state.oneActive
                ? ""
                : this.state.twoActive
                ? ""
                : "invis-button"
            }`}
          >
            Geri
          </button>
          <button onClick={this.handleClick} className="first-footer-button">
            Kaydet ve Devam Et
          </button>
        </div>
      </div>
    );
  }
}

export default App;
