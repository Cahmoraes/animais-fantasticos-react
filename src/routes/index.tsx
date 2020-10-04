import React from 'react'

import Route from './route'
import Home from '../pages/Home'

const Routes: React.FC = () => (
  <Route path="/" exact component={Home} />
)

export default Routes