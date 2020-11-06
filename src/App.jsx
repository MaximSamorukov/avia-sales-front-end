import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket/Ticket';
import Btn from './Btn/Btn';
// import LeftFilter from './LeftFilter/LeftFilter';
// import UpperSorter from './UpperSorter/UpperSorter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }


  render() {
    // this.getAsyncTickets();
    // const data = [{ fruit: 'apple', two: 'three' }];
    // const data = "Pups";
    // console.log(data);
    return (
      <div className="App">
        <Btn />
      </div>
    )
  }
}

