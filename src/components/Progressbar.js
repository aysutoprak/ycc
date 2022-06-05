import React, { Component } from "react";
import "./progressbar.scss";

class Progressbar extends Component {
  onNextClick = () => {
    let activeValue = this.props.infok;
    activeValue++;
    // this.setState({ currentActive: activeValue });
    console.log(this.state.activeValue);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="progress-container">
            <div className="progress" id="progress"></div>
            <div className="circles active">
              <i className="fa-regular fa-calendar"></i>
            </div>
            <div className="circles active">
              <i className="fa-solid fa-bed"></i>
            </div>
            <div className="circles active">
              <i className="fa-regular fa-credit-card"></i>
            </div>
          </div>
        </div>
        <div>
          {/* <button className="btn" id="prev" disabled>
            Prev
          </button>
          <button className="btn" onClick={this.onNextClick} id="next">
            Next
          </button> */}
        </div>
      </div>
    );
  }
}
export default Progressbar;
