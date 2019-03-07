import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Table from "../components/widgets/Table/Table";
import Slider from "../components/widgets/Slider/Slider";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/table' component={Table}/>
          <Route path='/slider' component={Slider}/>
        </Switch>
      </main>
    )
  }
}

export default Main
