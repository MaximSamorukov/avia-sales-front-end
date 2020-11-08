import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Ticket from './Ticket/Ticket';
import Btn from './Btn/Btn';
import LeftFilter from './LeftFilter/LeftFilter';
import UpperSorter from './UpperSorter/UpperSorter';
import PrevNext from './PrevNext/PrevNext';
import logo from './assets/logos/Logo.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      currentItems: [],
      amount: 3,
      currentUpFilter: '',
      curUpFilteredItem: '',

    }
  }
  upperSorterAction = async (e) => {
    if (this.state.currentItems.length === 0) {
      return;
    }
    const names = {
      right: 'quickly',
      left: 'cheap',
    }
    const cUF = this.state.currentUpFilter;
    const target = e.target.className.split("-")[3].split(' ')[0];
    const targetFilter = names[target];
    // console.log(targetFilter);
    if (cUF !== '' && cUF !== targetFilter) {
      await this.setState({currentUpFilter: targetFilter});
    }
    else if (cUF !== '' && cUF === targetFilter) {
      await this.setState({currentUpFilter: ''});
      await this.setState({curUpFilteredItem: ''});
    } else {
      await this.setState({currentUpFilter: targetFilter});
    };
    if (this.state.currentUpFilter !== '') {
      const filteredElement = this.state.currentItems.sort((a, b) => a.price - b.price)[0];
      console.log(filteredElement);
      await this.setState({curUpFilteredItem: filteredElement});
    }
  }

  action = async (e) => {
    // console.log(e.target.textContent);
    if (e.target.textContent === 'next') {
      const nextVal = this.state.page + 1;
      await this.setState({page: nextVal});
      // console.log(this.state.page);
    } else {
      const prevVal = this.state.page === 1 ? this.state.page : this.state.page - 1;
      await this.setState({page: prevVal});
      // console.log(this.state.page);
    }
    const beginVal = this.state.page;
    const endVal = beginVal + this.state.amount;
    const curItems = this.state.items.slice(beginVal, endVal);
    await this.setState({currentItems: curItems});
    // this.render();

  }

  callbackFn = async (arg) => {
    // console.log(arg);
    await this.setState({ items: arg});
    const beginVal = await this.state.page - 1;
    const endVal = await beginVal + this.state.amount;
    const curItems = await arg.slice(beginVal, endVal);
    await this.setState({currentItems: curItems});

    // return arg;
}

  render() {
    let list = '';
if(this.state.curUpFilteredItem !== '') {
  list = <Ticket tick={this.state.curUpFilteredItem}/>;
} else {
  list = this.state.currentItems.map((i, index) => <Ticket key={index} tick={i}/>);

}
    return (
      <>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
</style>

      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <LeftFilter callback={this.callbackFn} />
        <div className="main-part-container">
          <UpperSorter action={this.upperSorterAction}/>
          <div className="tickets-list-container">
            {list}
          </div>
          {(this.state.currentItems.length > 0 && this.state.curUpFilteredItem === '') && <PrevNext action={this.action} />}
      </div>
    </main>
    </>
    )
  }
}

