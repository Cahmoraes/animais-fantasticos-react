import React from 'react'

import Route from './route'
import Home from '../pages/Home'

const Routes: React.FC = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/animais-fantasticos-react/" component={Home} />
  </>
)

export default Routes