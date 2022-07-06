import { useState, useEffect } from 'react';
import "./App.css";

import CardList from "./components/card-list/card-list-component.jsx";
import SearchBox from "./components/search-box/search-box-component.jsx";

import { killers } from "./data/killersList";

//import { CardList } from "./components/card-list/card-list-component.jsx";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('');
  const [killerss, setKillerss] = useState([]);
  const [filteredKillers, setFilteredKillers] = useState(killerss);

  useEffect(() => {
    // fetch(`${process.env.REACT_APP_KILLERS}`,{ method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}})
    // .then(response => response.json())
    // .then(killer => this.setState({killers: killer}))
    setKillerss(killers);
  }, [])

  useEffect(() => {
    const newFilteredKillers = killerss.filter(killer => killer.name.toLowerCase().includes(searchField.toLowerCase()));

    setFilteredKillers(newFilteredKillers);

    console.log("evento de filtro")

  }, [killerss, searchField])

  const onSearchChange = (e) => setSearchField(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  console.log('render');



  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Killer"
        className="monsters-search-box" />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="Title"
        className="title-search-box" />
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
