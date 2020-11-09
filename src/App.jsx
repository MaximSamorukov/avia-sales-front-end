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
      currentCollection: [],
      amount: 3,
      currentUpFilter: [],
      curUpFilteredItem: [],

    }
  }

  leftFilterAction = async ({ id, checked }) => {
    const [...curCol] = [...this.state.currentCollection];
    const [...origin] = [...this.state.items];
    const [...currentFilterList] = [...this.state.currentUpFilter];
    let newFilters = [];
    const upFiltersArray = ['cheap', 'quickly', 'allOption'];
    const leftFiltersArray = ['allOption', 'without', 'optionOne', 'optionTwo', 'optionThree'];
    const filterFn = {
      allOption: (arr) => arr,
      without: () => 0,
      optionOne: () => 1,
      optionTwo: () => 2,
      optionThree: () => 3,
      cheap: (arr) => arr.sort((a , b) => a.price - b.price),
      quickly: (arr) => arr.sort((a, b) => {
        const segFromA = a.segments;
        const[ thereA, hereA ] = segFromA;
        const durThereA = thereA.duration;
        const durHereA = hereA.duration;

        const segFromB = b.segments;
        const[ thereB, hereB ] = segFromB;
        const durThereB = thereB.duration;
        const durHereB = hereB.duration;
        const durA = durThereA + durHereA;
        const durB = durThereB + durHereB;
        return durA - durB;
      }),
    };
    if (checked && id === 'allOption') {
      const newFiltersN = currentFilterList.filter((i) => upFiltersArray.includes(i));
      newFiltersN.unshift(id);

      await this.setState({currentUpFilter: newFiltersN});
    }
    else if (checked && id !== 'allOption') {
      currentFilterList.unshift(id);
      console.log(currentFilterList);
      await this.setState({currentUpFilter: currentFilterList});

    } else {
      newFilters = currentFilterList.filter((i) => i !== id);

      await this.setState({currentUpFilter: newFilters});
    };
    console.log(this.state.currentUpFilter);
    let list = [];
      if (this.state.currentUpFilter.length === 0) {
        [...list] = [...origin];
      } else {
        list = this.state.currentUpFilter.reduce((acc, i) => {

          if (i === 'allOption') {
            return origin;
          }
          else if (leftFiltersArray.includes(i) && i !== 'allOption') {
            const array = origin.filter((ii) => {
              // console.log(ii);
              const thereStops = ii.segments[0].stops.length;
              const hereStops = ii.segments[1].stops.length;
              const stops = thereStops >= hereStops ? thereStops : hereStops;
              // console.log(thereStops + ' ' + hereStops + ' ' + stops + ' ' + filterFn[i]());

              return stops === filterFn[i]();
            });
            const [...t] = [...acc.push(array)].flat();
            console.log(t);

            return t.flat();
          } else {
            // console.log("i");
            return filterFn[i](acc);
          }
        }, []);
        // console.log(list);
      }
      // console.log(list);
      await this.setState({currentCollection: list});
      const beginVal = this.state.page;
      const endVal = beginVal + this.state.amount;
      const curItems = this.state.currentCollection.slice(beginVal, endVal);
      await this.setState({currentItems: curItems});

  }

  upperSorterAction = async (e) => {
    if (this.state.currentItems.length === 0) {
      return;
    }

    const filterFn = {
      allOption: (arr) => arr,
      without: (arr) => arr,
      optionOne: (arr) => arr,
      optionTwo: (arr) => arr,
      optionThree: (arr) => arr,
      cheap: (arr) => arr.sort((a , b) => a.price - b.price),
      quickly: (arr) => arr.sort((a, b) => {
        const segFromA = a.segments;
        const[ thereA, hereA ] = segFromA;
        const durThereA = thereA.duration;
        const durHereA = hereA.duration;

        const segFromB = b.segments;
        const[ thereB, hereB ] = segFromB;
        const durThereB = thereB.duration;
        const durHereB = hereB.duration;
        const durA = durThereA + durHereA;
        const durB = durThereB + durHereB;
        return durA - durB;
      }),
    };
    const names = {
      right: 'quickly',
      left: 'cheap',
    }
    const opposite = {
      quickly: 'cheap',
      cheap: 'quickly',
    }
    let cUF = this.state.currentUpFilter;
    const target = e.target.className.split("-")[3].split(' ')[0];
    const targetFilter = names[target];
    const oppositeFilter = opposite[targetFilter];
    if (!cUF.includes(targetFilter)) {
      cUF.push(targetFilter);
      cUF = cUF.filter((i) => i !== oppositeFilter);
      await this.setState({currentUpFilter: cUF});
    }
    else if (cUF.includes(targetFilter)) {
      cUF = cUF.filter((i) => i !== targetFilter)
      await this.setState({currentUpFilter: cUF});
      // await this.setState({curUpFilteredItem: ''}); =================
    }
    // console.log(cUF);
      let list = [];
      const [...originArr] = [...this.state.items];
      if (this.state.currentUpFilter.length === 0) {
        [...list] = [...originArr];
      } else {
        [...list] = [...this.state.currentUpFilter.reduce((acc, i) => {
          return filterFn[i](acc);
        }, originArr)];
      };
      await this.setState({currentCollection: list});
      const beginVal = this.state.page;
      const endVal = beginVal + this.state.amount;
      const curItems = this.state.currentCollection.slice(beginVal, endVal);
      await this.setState({currentItems: curItems});

      // this.changeState();
  }

  action = async (e) => { // add Prev Next buttons
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
    const curItems = this.state.currentCollection.slice(beginVal, endVal);
    await this.setState({currentItems: curItems});
    // this.render();

  }

  callbackFn = async (arg) => { // getting new collecton from server
    // console.log(arg);
    const [...arr1] = [...arg];
    const [...arr2] = [...arg];
    await this.setState({ items: arr1});
    await this.setState({ currentCollection: arr2})
    const beginVal = await this.state.page - 1;
    const endVal = await beginVal + this.state.amount;
    const curItems = await arg.slice(beginVal, endVal);
    await this.setState({currentItems: curItems});

    // return arg;
}

  render() {

  const list = this.state.currentItems.map((i, index) => <Ticket key={index} tick={i}/>);

    return (
      <>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
</style>

      <header>
        <img src={logo} alt="logo" />
      </header>
      <main>
        <LeftFilter action={this.leftFilterAction} callback={this.callbackFn} />
        <div className="main-part-container">
          <UpperSorter ifItems={this.state.items.length > 0} action={this.upperSorterAction}/>
          <div className="tickets-list-container">
            {list}
          </div>
          {this.state.currentCollection.length > 0 && <PrevNext action={this.action} />}
      </div>
    </main>
    </>
    )
  }
}

