import React from 'react'
import {Switch} from 'react-router-dom'

import Route from './route'
import Home from '../pages/Home'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/animais-fantasticos-react/" component={Home} />
  </Switch>
)

export default Routes