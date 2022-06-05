import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Progressbar from "./components/Progressbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActive: "0",
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

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
        <Progressbar infok={this.state.currentActive} />
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
        <div className="footer-div">
          <button className="first-footer-button">Kaydet ve Devam Et</button>
        </div>
      </div>
    );
  }
}

export default App;
