import React from 'react';

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: props.tick,
    }
  }

  render() {
    const { tick } = this.props;
    console.log(tick);

    return (
      <div className="card-container">
      <div className="card">
        <p>Carrier: {tick.carrier && <span>{tick.carrier}</span>}</p>
        <p>Price: {tick.price && <span>{tick.price}</span>}</p>
        <p>Origin: {tick.segments && <span>{tick.segments[0].origin}</span>}</p>
        <p>Destination: {tick.segments && <span>{tick.segments[0].destination}</span>}</p>
      </div>
      </div>
      );
  }
}