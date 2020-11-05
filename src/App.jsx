import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket/Ticket';
import LeftFilter from './LeftFilter/LeftFilter';
import UpperSorter from './UpperSorter/UpperSorter';
const getTickets = require("./getTickets");

export default class App extends React.Component {

  render() {
    // const data = getTickets();
    const data = '{ fruit: \'apple\', two: \'three\ }';
    // console.log(data);
    return (
  <div className="App">
    <Ticket tickets={data}/>
  </div>
    )
  }
}

