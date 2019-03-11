import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Table from "../components/widgets/Table/Table";
import Slider from "../components/widgets/Slider/Slider";
import Elements from "../components/widgets/Elements/Elements";
import Select from "../components/widgets/Select/Select";



class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/table' render={() => <Table data={this.props.data} />} />
          <Route path='/slider' render={() => <Slider data={this.props.data} />} />
          <Route path='/elements' render={() => <Elements />} />
          <Route path='/select' render={() => <Select data={this.props.data} />} />
        </Switch>
      </main>
    )
  }
}

export default Main
