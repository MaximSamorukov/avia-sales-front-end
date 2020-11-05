import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket/Ticket';
import LeftFilter from './LeftFilter/LeftFilter';
import UpperSorter from './UpperSorter/UpperSorter';
// const getTickets = require("./getTickets");

export default class App extends React.Component {
  render() {
    return (
  <div className="App">
    <UpperSorter />
    <LeftFilter />
    <Ticket />
  </div>
    )
  }
}

