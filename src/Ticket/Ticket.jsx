import React from 'react';
import S7Logo from '../assets/logos/S7Logo.svg'
export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: props.tick,
    }
  }

  render() {
    const { tick } = this.props;
    // console.log(tick);

    return (
      <div className="ticket-container">
        <div className="ticket-header">
          <div className="ticket-header-left">
              <div className="price">
                  13 400 P
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
                      MOW - HKT
              </div>
              <div className="toward-time ticket-scndline">
                      10:45 - 08:00
              </div>
            </div>
            <div className="back bc-frst-col">
              <div className="back-place ticket-frstline">
                      MOW - HKT
              </div>
              <div className="back-time ticket-scndline">
                      11:20 - 00:50
              </div>
            </div>
          </div>
          <div className="ticket-footer-scnd-col column">
            <div className="toward tw-scnd-col">
              <div className="toward-rootTime ticket-frstline">
                      в пути
              </div>
              <div className="toward-rootTime ticket-scndline">
                      21ч 15м
              </div>
            </div>
            <div className="back bk-scnd-col">
              <div className="back-rootTime ticket-frstline">
                      в пути
              </div>
              <div className="back-rootTime ticket-scndline">
                      13ч 30м
              </div>
            </div>
          </div>
          <div className="ticket-footer-thrd-col column">
            <div className="toward tw-thrd-col">
              <div className="toward-extraInfo ticket-frstline">
                      2 пересадки
              </div>
              <div className="toward-extraInfo ticket-scndline">
                      hkg, jnb
              </div>
            </div>
            <div className="back bk-thrd-col">
              <div className="back-extraInfo ticket-frstline">
                      1 пересадка
              </div>
              <div className="back-extraInfo ticket-scndline">
                      hkg
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}