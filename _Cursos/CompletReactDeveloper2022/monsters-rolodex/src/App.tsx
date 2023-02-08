import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

import { anyKillers } from "./utils/data.utils";

import { getData } from "./utils/data.utils";

export type Killer = {
  _id: string;
  name: string;
  alias: string;
  icon: {
    preview_portrait: string;
  };
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [killerss, setKillerss] = useState<Killer[]>([]);
  const [filteredKillers, setFilteredKillers] = useState(killerss);

  useEffect(() => {
    // const fetchKillers = async () => {
    //   const killers = await getData<Killer[]>(`${process.env.REACT_APP_KILLERS}`);
    //   setKillerss(killers);
    // };
    // fetchKillers();
    setKillerss(anyKillers);
  }, []);

  useEffect(() => {
    const newFilteredKillers = killerss.filter((killer: any) =>
      killer.name.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredKillers(newFilteredKillers);

    console.log("evento de filtro");
  }, [killerss, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => setSearchField(e.target.value);
  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => setTitle(e.target.value);
  console.log("render");

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder="Search Killer" className="monsters-search-box" />
      <br />
      <SearchBox onChangeHandler={onTitleChange} placeholder="Title" className="title-search-box" />
      <CardList killers={filteredKillers} />
    </div>
  );
};
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
