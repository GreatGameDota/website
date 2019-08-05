import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';

export default class Routes extends Component {
	render () {
		const { db, addData, removeData } = this.props;
		return (
			<Router>
				<Switch>
					<Route
						exact
						path='/'
						render={(routeProps) => (
							<Page
								{...routeProps}
								title='Home Page'
								testDB={db}
								add={addData}
								remove={removeData}
								page={0}
							/>
						)}
					/>
					<Route
						exact
						path='/projects/project1'
						render={(routeProps) => <Page {...routeProps} title='Project1' testDB={db} page={1} />}
					/>
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}
