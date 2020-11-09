import React from 'react';
var cn = require('classnames');

export default class UpperSorter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,
      left: false,
    }
  }

  onClick = async (e) => {
    if (this.props.ifItems === false) {
      return;
    }
    const target = e.target.className.split("-")[3].split(' ')[0];
    const opposite = target === 'left' ? 'right' : 'left';
    const newT = !this.state[target];
    const newP = false;
    await this.setState({[target]: newT});
    await this.setState({[opposite]: newP});
    this.props.action(e);
  }

  render() {
    const leftClass = cn({"top-panel-container-left": true, "top-panel-blue": this.state.left});
    const rightClass = cn({"top-panel-container-right": true, "top-panel-blue": this.state.right});

    return (
      <div onClick={this.onClick} className="top-panel-container">
        <div className={leftClass}>
          Самый дешевый
        </div>
        <div className={rightClass}>
          Самый быстрый
        </div>
      </div>
    );
  }
}