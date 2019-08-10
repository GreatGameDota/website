import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';

export default class Routes extends Component {
	render () {
		const { db, addData, removeData, updateData } = this.props;
		return (
			<Router>
				<Switch>
					<Route
						exact
						path='/'
						render={(routeProps) => <Page {...routeProps} title='Home Page' db={db} project='home' />}
					/>
					{db.projects.map((project, index) => (
						<Route
							exact
							path={project.path}
							render={(routeProps) => (
								<Page
									{...routeProps}
									title={project.name}
									db={db}
									project={project}
									add={addData}
									update={updateData}
									remove={removeData}
								/>
							)}
							key={project.uid}
						/>
					))}
					<Route
						exact
						path='/projects/add'
						render={(routeProps) => (
							<Page {...routeProps} title='Add Project Form' db={db} add={addData} project='form' />
						)}
					/>
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}
