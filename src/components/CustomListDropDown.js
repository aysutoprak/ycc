import React from "react";
import "./dropdown.scss";

export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.hotel_name}</strong>
    <select
      className="form-control"
      name="{props.hotel_name}"
      onChange={props.onChange}
    >
      <option defaultValue>
        Rezervasyon Yapmak İstediğiniz Oteli Seçiniz. {props.hotel_name}
      </option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.hotel_name}
        </option>
      ))}
    </select>
  </div>
);
export default class CustomListDropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: [],
      value: "",
    };
  }
  componentDidMount() {
    fetch("https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotels")
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }));
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div className="drop-menu">
        <CustomDropdown
          name={this.state.hotel_name}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
