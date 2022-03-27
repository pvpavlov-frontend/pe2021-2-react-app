import React, { Component } from 'react';
// rcc

class Counter extends Component {
  //rconst
  constructor(props) {
    super(props);

    this.state = {
      count: 0,

      src: '',
      firstName: '',
      likesCount: 0,
    };
  }

  decrement = e => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count - step });
  };

  // ОБРАБОТЧИКИ ДЕЛАЕМ СТРЕЛКАМИ (или bind())
  increment = e => {
    // this.state.count++; // напрямую менять состояние нельзя!
    const { count } = this.state;
    const { step } = this.props;
    this.setState({ count: count + step }); // для ререндера
  };

  // Написать обработчик на кнопку -
  render() {
    const { count } = this.state;
    return (
      <>
        <div>{count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
