import React from 'react'
import {
  Redirect,
  Route as RouteDOM,
  RouteProps as RoutePropsDOM
} from 'react-router-dom'

interface RouteProps extends RoutePropsDOM {
  isProtected?: boolean,
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isProtected = false, component: Component, ...rest }) =>
  <RouteDOM
    {...rest}
    render={({ location }) => isProtected ? (
      <Redirect to={{
        pathname: '/',
        state: { from: location }
      }} />
    ) : (
        <Component />
      )}
  />

export default Route