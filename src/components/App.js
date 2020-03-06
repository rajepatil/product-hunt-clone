import React from 'react';
import './App.css';
import { Cards } from './Cards';
import { Header } from './header';
import { Asidecard } from './Asidecard';

import { names, profileSrc } from '../data';

class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      names: names
    };
  }

  updateCount = count =>
  {
    let updatedData = this.state.names.map(p =>
    {
      if (p.count === count) {
        p.count = p.count + 1;
      }
      return p;
    });
    this.setState({ names: updatedData });
  };

  render()
  {

    return (
      <div className="App">
        <Header />
        <div className="container flex">
          <Cards names={names} updateCount={this.updateCount} title="Popular this month" />
          <Asidecard title="Makers working today" profileSrc={profileSrc} />
        </div>
      </div>
    );
  }
}

export default App;


