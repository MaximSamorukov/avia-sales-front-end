import React from 'react';

export default class Ticket extends React.Component {
  render() {
    const { tickets } = this.props;
    return (
      <div>
        <p>Price: <span>{tickets}</span></p>
        <p>Carrier: <span>carrier</span></p>
      </div>);
  }
}