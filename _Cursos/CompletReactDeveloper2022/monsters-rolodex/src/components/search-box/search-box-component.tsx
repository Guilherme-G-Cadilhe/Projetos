import "./search-box.styles.css";
// import { ChangeEventHandler } from "react";
import { ChangeEvent } from "react";

// NORMAL INTERFACE CREATION AND EXTENSION
//assigning types to object ( Interface )
/* 
interface IChangeHandlerPropz {
  onChangeHandler: (a: string) => void;
 }

// extending interface
interface ISearchBoxProps extends IChangeHandlerPropz {
  className: string;
  placeholder?: string; //optional property
 }
*/

// INTERFACE OVERLOADING ( ACTS AS EXTENDS )
/*
interface ISearchBoxProps {
  className: string;
  placeholder?: string; //optional property
}
interface ISearchBoxProps {
  onChangeHandler: (a: string) => void;
}
*/

// TYPE instead of Interface
type SearchBoxProps = {
  className: string;
  placeholder?: string; //optional property
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void; //onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => {
  return (
    <input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={onChangeHandler} />
  );
};

export default SearchBox;

// assigning type
// const name: string = '123456'

//assigning type to a function
const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {
  return true;
};

//assigning type to a function that returns nothing
const func2: (a: string, b: number, c: boolean) => void = (a, b, c) => {
  return;
};

type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};
type ItalianAddress = {
  street: string;
  region: string;
};

// TYPE UNION
type Address = CanadianAddress | USAddress | ItalianAddress;

const address: Address = {
  street: "adas",
  region: "dsd",
};

// _____________________________________________________________________________
// import { Component } from 'react'
// import "./search-box.styles.css"

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.className}`}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />)
//   }
// }

// export default SearchBox;
