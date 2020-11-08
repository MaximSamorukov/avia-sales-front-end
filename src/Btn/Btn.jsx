import React from 'react';
import Ticket from '../Ticket/Ticket';
const getTickets = require("../getTickets");

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = async (e) => {
    e.preventDefault();
    const data = await getTickets();
    this.props.callback(data);
  }

  render() {
    return (
      <div onClick={this.onClick} className="btn-get-info-cont">
        <div className="btn-get-info">
          получить информацию
        </div>
      </div>
      );
  }
}