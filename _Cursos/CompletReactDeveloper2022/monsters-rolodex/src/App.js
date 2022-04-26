import React, { Component } from "react";
import "./App.css";

import { killers } from "./data/killersList";
import { CardList } from "./components/card-list/card-list-component.jsx";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      killers: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // fetch(`${process.env.REACT_APP_KILLERS}`,{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    // .then(response => response.json())
    // .then(killer => this.setState({killers: killer}))
    this.setState({
      killers: killers,
    },
      () => {
        console.log("Mounted and Loaded")
      });
  }

  onSearchChange = (e) => this.setState({ searchField: e.target.value })

  render() {

    const { killers, searchField } = this.state
    const filteredKillers = killers.filter(killer => killer.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <input className='search-box'
          type="search"
          placeholder="Search Killer"
          onChange={this.onSearchChange}
        />
        <CardList killers={filteredKillers} />
      </div>
    );
  }
}

export default App;
