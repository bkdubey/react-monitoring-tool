//import React from "react";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl
} from "react-bootstrap";
const style = {
  margin: 0,
  top: 130,
  right: 550,
  bottom: 60,
  left: "auto",
  position: "fixed"
};
const style_project = {
  margin: 0,
  top: 130,
  right: 350,
  bottom: 60,
  left: "auto",
  position: "fixed",
  innerWidth: 20
};

const handleChange = event => {
  this.setState({
    value: event.target.value
  });
};

const envt = [{ value: "one", label: "Dev" }, { value: "two", label: "Pre" }];

const project = [
  { value: "one", label: "mkd tool" },
  { value: "two", label: "FRTB" }
];
const defaultEnvt = envt[0];
const defaultProject = project[0];

const StripedTable = ({ data }) => (
  <div className="card">
    <div className="header">
      <h4 className="title">Envrionment detail</h4>
      <p className="category">Find info of all info across envt</p>
      <div>
        <div style={style}>
          <Dropdown
            options={envt}
            onChange={this._onSelect}
            value={defaultEnvt}
            placeholder="Select an option"
          />{" "}
        </div>
        <div style={style_project}>
          <Dropdown
            options={project}
            onChange={this._onSelect}
            value={defaultProject}
            placeholder="Select an option"
          />{" "}
        </div>
      </div>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Country</th>
            <th>City11</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>$ {item.salary}</td>
              <td>{item.country}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default StripedTable;
