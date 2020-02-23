import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import MainContainer from './components/Order/components';
import MainDashboard from './components/Order/components/routes';


const routes = [
  { component: MainDashboard, exact: true, path: '/dashboard'},
]

const routeSwitcher = (
  routes.map(route => {
    const { component, exact, path } = route;
    return <Route component={component} exact={exact} key={path} path={path}  />
  })
)

const App = () => {
    return (
      <>
        <Router>
          <Switch>
          {routeSwitcher}
          </Switch>
        </Router>
      </>
    )
}

export default App
