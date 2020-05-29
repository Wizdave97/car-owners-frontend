import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Filters from './components/Filters';
import People from './components/People';


class App extends React.Component {

  render() {

    return (
      <div className="w-full h-full bg-gray-100" >
        <Switch>
          <Route exact path='/'  render={() => (<Filters />)} />
          <Route path='/people' render={() => (<People />)}  />
        </Switch>
      </div>
    )
  }
}

export default App;
