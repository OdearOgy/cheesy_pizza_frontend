import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { LandingPage, CheckoutPage } from './pages';

import { AppStls as styles } from './styles';

function App() {
	return (
		<div className={styles.app}>
			<Switch>
				<Route exact path='/' component={LandingPage} />
			</Switch>
		</div>
	);
}

export default withRouter(App);
