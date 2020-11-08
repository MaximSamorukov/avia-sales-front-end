import React from 'react';
import Btn from '../Btn/Btn'
export default class LeftFilter extends React.Component {
  render() {
    return (

      <div className="myleft-menu-container">
      <div className="myleft-menu-container-cont">
          <div className="myleft-menu-container-title">
              количество пересадок
          </div>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="allOption" />
              <label className="form-check-label" HTMLfor="allOption">
                  Все
              </label>
          </div>

          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="without" />
              <label className="form-check-label" HTMLfor="without">
                  Без пересадок
              </label>
          </div>

          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="optionOne" />
              <label className="form-check-label" HTMLfor="optionOne">
                  1 пересадка
              </label>
          </div>

          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="optionTwo" />
              <label className="form-check-label" HTMLfor="optionTwo">
                  2 пересадки
              </label>
          </div>

          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="optionThree" />
              <label className="form-check-label" HTMLfor="optionThree">
                  3 пересадки
              </label>
          </div>
      </div>
      <Btn />
  </div>

    );
  }
}