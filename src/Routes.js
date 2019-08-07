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
							<Page {...routeProps} title='Home Page' db={db} add={addData} remove={removeData} project={null} />
						)}
					/>
					{db.projects.map((project, index) => (
						<Route
							exact
							path={`/projects/${project.name.toLowerCase()}`}
							render={(routeProps) => <Page {...routeProps} title={project.name} db={db} project={project} />}
							key={project.uid}
						/>
					))}
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}
