import React, { Component } from 'react';
import './App.css';

import MainNav from './components/mainNav/MainNav';
import Counters from './components/counters/Counters';

class App extends Component {

  state = {
    counters: [
        { id: 1, count: 4, img: 'https://picsum.photos/200?image=0' },
        { id: 2, count: 0, img: 'https://picsum.photos/200?image=42'},
        { id: 3, count: 0, img: 'https://picsum.photos/200?image=53'},
        { id: 4, count: 0, img: 'https://picsum.photos/200?image=74'},
        { id: 5, count: 0, img: 'https://picsum.photos/200?image=32'},
        { id: 6, count: 0, img: 'https://picsum.photos/200?image=21'}
    ]
  };

  handleDelete = ( currentProd ) => {
    const fltCounter = this.state.counters.filter( prod => prod.id !== currentProd.id );
    this.setState({ counters: fltCounter });
  }

  handleIncrement = ( cProd ) => {
    let cnt = [ ...this.state.counters ];
    let currentProdIdx = cnt.indexOf( cProd );
    if( cnt[currentProdIdx]['count'] < 8 ) { cnt[currentProdIdx]['count'] +=  1 };
    this.setState({ counters : cnt });
    // console.log(this.state);
  }

  handleReset = () => {

    const counters = this.state.counters.map( vl => {
        vl.count = 0;
        return vl;
    });

    this.setState({ counters });
  }

  handleDecrement = ( cProd ) => {

    let cnt = [ ...this.state.counters ];
    let idx = cnt.indexOf( cProd );
    if(cnt[idx]['count'] > 0)  { cnt[idx]['count'] -= 1 };
    this.setState({ counters : cnt });
  }

  render() {
    return (
      <React.Fragment>
        <MainNav totalItem={ this.state.counters.filter( itm =>  itm.count > 0 ).length } onReset={ this.handleReset }/>
        <main className="App">
          <Counters
            counters={ this.state.counters }
            onDel={ this.handleDelete }
            onInc={ this.handleIncrement } 
            onDec={ this.handleDecrement } />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
