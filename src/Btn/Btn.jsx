import React from 'react';
import Ticket from '../Ticket/Ticket';
const getTickets = require("../getTickets");

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
    }
  }

  onClick = async (e) => {
    e.preventDefault();
    const data = await getTickets();
    // console.log(data);
    const newArray = data.slice(0, 90);
    // newArray.map((i) => {
    //   console.log(i);
    //   return i;
    // })
    // console.log(newArray);
    // data.map((i) => {
    //   console.log(i);
    //   return i;
    // });
    // console.log(newData);
    this.setState({tickets: newArray});
    // console.log(this.state.tickets)
  }

  makeList = (data) => {
    if (data === {}) {
      // console.log(data);
      return null;
    } else {
      const list = data.map((i, index) => <Ticket key={index} tick={i} />);
      return list;

    }
  }

  render() {
    const { tickets } = this.state;
    // console.log(tickets);
    const item = this.makeList(tickets);
    return (
      <div class="btn-get-info-cont">
        <div class="btn-get-info">
          получить информацию
        </div>
      </div>
      );
  }
}