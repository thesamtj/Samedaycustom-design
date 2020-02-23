import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Orders from './Operations/components/Orders';
import MainContainer from './MainContainer';
import Operations from './Operations/components'

const routes = [
    { component: Dashboard, exact: true, url: '' },
    { component: Orders, exact: true, url: '/orders' },
    // { component: Operations, exact: true, url: 'Operations' },
]

const routeSwitch = path =>( 
    routes.map(route => {
        const {component, exact, url } = route;
        const link = `${path}${url}`;
        return (
            <Route key={url} path={link} exact={exact} component={component} />
        );
    })
    )

    const MainDashboard = () => {
        const { path } = useRouteMatch();
        return (
            <div>
                <MainContainer>
                    <Switch>{routeSwitch(path)}</Switch>
                </MainContainer>
            </div>
        )
    }

    export default MainDashboard;