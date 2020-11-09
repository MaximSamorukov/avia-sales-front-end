import React from 'react';
import Btn from '../Btn/Btn';
var cn = require('classnames');

export default class LeftFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            t: [],
            allOption: false,
        };
    }
    onClick = async (e) => {
        if (e.target.id === 'allOption' && e.target.checked) {
            await this.setState({allOption: true});
            for (let i = 2; i <= 5; i += 1) {
                const el = e.target.parentElement.parentElement.children[i].children[0];
                el.disabled = true;
                el.checked = false;
            };

        }
        else if (e.target.id === 'allOption' && !e.target.checked) {
            await this.setState({allOption: false});
            for (let i = 2; i <= 5; i += 1) {
                const el = e.target.parentElement.parentElement.children[i].children[0];
                el.disabled = false;
            };
        }
        this.props.action(e.target);
    }

    render() {
        const disAbled = this.state.allOption;
            return (

      <div className="myleft-menu-container">
      <div className="myleft-menu-container-cont">
          <div className="myleft-menu-container-title">
              количество пересадок
          </div>
          <div onClick={this.onClick} className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="allOption" />
              <label className={cn({ "form-check-label": true })} htmlFor="allOption">
                  Все
              </label>
          </div>

          <div onClick={this.onClick} className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="without" />
              <label className={cn({ "form-check-label": true, "font-gray": disAbled })} htmlFor="without">
                  Без пересадок
              </label>
          </div>

          <div onClick={this.onClick} className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="optionOne" />
              <label className={cn({ "form-check-label": true, "font-gray": disAbled })} htmlFor="optionOne">
                  1 пересадка
              </label>
          </div>

          <div onClick={this.onClick} className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="optionTwo" />
              <label className={cn({ "form-check-label": true, "font-gray": disAbled })} htmlFor="optionTwo">
                  2 пересадки
              </label>
          </div>

          <div onClick={this.onClick} className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="optionThree" />
              <label className={cn({ "form-check-label": true, "font-gray": disAbled })} htmlFor="optionThree">
                  3 пересадки
              </label>
          </div>
      </div>
      <Btn callback={this.props.callback}/>
  </div>

    );
  }
}