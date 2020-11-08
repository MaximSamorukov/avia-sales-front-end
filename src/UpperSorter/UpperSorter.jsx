import React from 'react';

export default class UpperSorter extends React.Component {
  render() {
    return (
      <div className="top-panel-container">
        <div className="top-panel-container-left top-panel-blue">
          Самый дешевый
        </div>
        <div className="top-panel-container-right">
          Самый быстрый
        </div>
      </div>
    );
  }
}