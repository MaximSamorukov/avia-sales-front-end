import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket/Ticket';
import Btn from './Btn/Btn';
import LeftFilter from './LeftFilter/LeftFilter';
import UpperSorter from './UpperSorter/UpperSorter';
import logo from './assets/logos/Logo.svg';

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
      <>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
</style>

      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <LeftFilter />
        <div className="main-part-container">
          <UpperSorter />
          <div className="tickets-list-container">
            <Ticket />
          </div>
      </div>
    </main>
    </>
    )
  }
}

