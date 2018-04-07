import React, { Component } from "react";
import{Navbar} from "./Navbar";
import Board  from "./Board";

class Dashaboard extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
       <h1>This the Dashaboard</h1>
       <Board/>       
      </div>
    );
  }
}
export default Dashaboard;
