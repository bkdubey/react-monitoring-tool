//import React from "react";
import React, { useState, Component } from "react";

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

const VMStatus = () => (
  <div className="card">
        <h1> hello </h1>
    </div>
)


    class checkStatus extends Component {


      constructor(props) {
         super(props);
         this.state = {
           error: null,
           isLoaded: false,
           items: []
         };
       }


      /*render() {
        return (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Steve Jobs</h5>
              <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
              <p class="card-text">Stay Hungry, Stay Foolish</p>
            </div>
          </div>
        );
      }*/

       componentDidMount() {
            let headers = new Headers();
             headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin','http://localhost/*');
            var request = 'http://127.0.0.1:8080/api/v2/getString?command=ls';
            var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

            fetch('http://localhost:8080/api/v2/getString?command=free -g')
            .then(res => res.json())
                  .then(
                    (result) => {
                      this.setState({
                        isLoaded: true,
                        items: result['free -g']
                      });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                      this.setState({
                        isLoaded: true,
                        error
                      });
                    }
                  )

            }

        render() {
            const { error, isLoaded, items } = this.state;
            if (error) {
              return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
              return <div>Loading...</div>;
            } else {
              return (
                <ul>
                  {items.map(item => (
                    <li key={item}>
                        {item}
                    </li>
                  ))}
                </ul>
              );
            }
          }

    }

export default checkStatus;
