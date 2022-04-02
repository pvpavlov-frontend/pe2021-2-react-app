import React, { Component } from 'react';
import Counter from '../Counter';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterSteps: [
        { id: 1, step: 1 },
        { id: 2, step: 10 },
        { id: 3, step: 100 },
      ],
    };
  }

  sortCounters = () => {
    const { counterSteps } = this.state;
    const newCounterSteps = [...counterSteps];
    newCounterSteps.sort((a, b) => b.step - a.step);
    this.setState({ counterSteps: newCounterSteps });
  };

  render() {
    const { counterSteps } = this.state;

    return (
      <>
        <div>
          {counterSteps.map((cS, index) => (
            <Counter key={cS.id} step={cS.step} />
          ))}
        </div>
        <button onClick={this.sortCounters}>Sort</button>
      </>
    );
  }
}

export default UsersList;
