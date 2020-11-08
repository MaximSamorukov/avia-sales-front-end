import React from 'react';
import S7Logo from '../assets/logos/S7Logo.svg';
import Dinero from '../../node_modules/dinero.js';

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: props.tick,
    }
  }

  getDuration = (duration) => {
    // console.log(duration);
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return (`${hours}ч ${minutes}м`);
  }

  getStopAirports = ({stops}) => {
    // console.log(stops);
    const string = (stops.reduce((acc, item) => `${acc}${item},`, '')).slice(0, -1);
    const returnStr = string === ''? ' ' : string;
    return returnStr;
  }

  getStops = ({stops}) => {
    // console.log(stops);
    const array = ['прямой', '1 пересадка', '2 пересадки', '3 пересадки', '4 пересадки', '5 пересадок']
    const howManyStops = stops.length < 6 ? array[stops.length] : `${stops.length} пересадок`;
    return howManyStops;
  }

  getPrice = (pr) => {
    const price = `${pr}`;
    const hundreds = price.slice(0, -3);
    const ones = price.slice(-3);
    return `${hundreds} ${ones} Р`;
  };

  getTime = ({ date, duration }) => {
    const begin = new Date(date);
    const end = new Date(begin.valueOf() + (duration * 60 * 1000));
    // console.log(end);
    // console.log(begin);
    const minutesBegin = `${begin.getMinutes()}`.length === 1 ? `0${begin.getMinutes()}` : `${begin.getMinutes()}`;
    const hoursBegin = `${begin.getHours()}`.length === 1 ? `0${begin.getHours()}` : `${begin.getHours()}`;
    // console.log(hoursBegin.length);
    const minutesEnd = `${end.getMinutes()}`.length === 1 ? `0${end.getMinutes()}` : `${end.getMinutes()}`;
    const hoursEnd = `${end.getHours()}`.length === 1 ? `0${end.getHours()}` : `${end.getHours()}`;
    const time = (`${hoursBegin}:${minutesBegin} - ${hoursEnd}:${minutesEnd}`);
    return time;
  }

  render() {
    const { carrier, price, segments } = this.props.tick;
    const [ segFl, segSl ] = segments;
    // this.getStopAirports(segFl);
    // console.log(this.props.tick);

    return (
      <div className="ticket-container">
        <div className="ticket-header">
          <div className="ticket-header-left">
              <div className="price">
                  {this.getPrice(price)}
              </div>
          </div>
          <div className="ticket-header-right">
              <div className="air-logo">
                  <img src={S7Logo} alt="S7" />
              </div>
          </div>
        </div>
        <div className="ticket-footer">
          <div className="ticket-footer-frst-col column">
            <div className="toward tw-frst-col">
              <div className="toward-place ticket-frstline">
                {`${segFl.origin} - ${segFl.destination}`}
              </div>
              <div className="toward-time ticket-scndline">
                      {this.getTime(segFl)}
              </div>
            </div>
            <div className="back bc-frst-col">
              <div className="back-place ticket-frstline">
              {`${segSl.origin} - ${segSl.destination}`}
              </div>
              <div className="back-time ticket-scndline">
              {this.getTime(segSl)}
              </div>
            </div>
          </div>
          <div className="ticket-footer-scnd-col column">
            <div className="toward tw-scnd-col">
              <div className="toward-rootTime ticket-frstline">
                      в пути
              </div>
              <div className="toward-rootTime ticket-scndline">
                {this.getDuration(segFl.duration)}
              </div>
            </div>
            <div className="back bk-scnd-col">
              <div className="back-rootTime ticket-frstline">
                      в пути
              </div>
              <div className="back-rootTime ticket-scndline">
              {this.getDuration(segSl.duration)}
              </div>
            </div>
          </div>
          <div className="ticket-footer-thrd-col column">
            <div className="toward tw-thrd-col">
              <div className="toward-extraInfo ticket-frstline">
                      {this.getStops(segFl)}
              </div>
              <div className="toward-extraInfo ticket-scndline">
                      {this.getStopAirports(segFl)}
              </div>
            </div>
            <div className="back bk-thrd-col">
              <div className="back-extraInfo ticket-frstline">
                {this.getStops(segSl)}
              </div>
              <div className="back-extraInfo ticket-scndline">
              {this.getStopAirports(segSl)}
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}