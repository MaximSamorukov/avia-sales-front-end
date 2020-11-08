import React from 'react';


export default class PrevNext extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (e) => {
    e.preventDefault();
    this.props.action(e);
    // const data = await getTickets();
    // const newArray = data.slice(0, 10);
    // this.props.callback(newArray);
  }

  render() {
    return (
      <div onClick={this.onClick} className="prevNext-cont">
        <div className="btn-prev-cont page-btn-cont">
          <div className="btn-prev page-btn">
            prev
          </div>
        </div>
        <div className="btn-next-cont page-btn-cont">
          <div className="btn-next page-btn">
            next
          </div>
        </div>
      </div>


      );
  }
}