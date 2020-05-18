import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Header } from './components';
import { LandingPage } from './pages';

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={LandingPage}></Route>
			</Switch>
		</div>
	);
}

export default withRouter(App);
