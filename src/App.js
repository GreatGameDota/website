import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';

class App extends Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route exact path='/' render={(routeProps) => <HomePage {...routeProps} test='hello' />} />
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}

export default App;
