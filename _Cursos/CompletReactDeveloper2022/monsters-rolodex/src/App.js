import { useState, useEffect } from 'react';
import "./App.css";

import CardList from "./components/card-list/card-list-component.jsx";
import SearchBox from "./components/search-box/search-box-component.jsx";

import { killers } from "./data/killersList";

//import { CardList } from "./components/card-list/card-list-component.jsx";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_KILLERS}`,{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    // .then(response => response.json())
    // .then(killer => this.setState({killers: killer}))
    setMonsters(killers);
  }, [])

  const onSearchChange = (e) => setSearchField(e.target.value);
  console.log('searchField', searchField);

  const filteredKillers = killers.filter(killer => killer.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
      <h1 className="app-title">Dead by Daylight Killers</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Killer"
        className="monsters-search-box" />
      <CardList killers={filteredKillers} />
    </div>
  );
}
//import { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//       killers: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     // fetch(`${process.env.REACT_APP_KILLERS}`,{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
//     // .then(response => response.json())
//     // .then(killer => this.setState({killers: killer}))
//     this.setState({
//       killers: killers,
//     });
//   }

//   onSearchChange = (e) => this.setState({ searchField: e.target.value })

//   render() {
//     console.log("Renders do App")
//     const { killers, searchField } = this.state
//     const { onSearchChange } = this
//     const filteredKillers = killers.filter(killer => killer.name.toLowerCase().includes(searchField.toLowerCase()))

//     return (
//       <div className="App">
//         <h1 className="app-title">Dead by Daylight Killers</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Killer"
//           className="monsters-search-box" />
//         <CardList killers={filteredKillers} />
//       </div>
//     );
//   }
// }

export default App;
