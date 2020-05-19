import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Navbar } from './components';
import { LandingPage } from './pages';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Switch>
				<Route exact path='/' component={LandingPage}></Route>
			</Switch>
		</div>
	);
}

export default withRouter(App);
