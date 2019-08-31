import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/Page';
import HomePage from './components/HomePage';
import Loading from './components/Loading';
import Error from './components/404';
import primaryColor from '@material-ui/core/colors/blue'; // 50-900

export default class Routes extends Component {
	history = createBrowserHistory(this.props);

	render () {
		const { db, addData, removeData, updateData } = this.props;

		const getProject = (props) => {
			let path = props.match.params.id;
			if (db && db.projects.length > 0) {
				let project = db.projects.find((project) => project.path === path);
				if (project) {
					return (
						<Page
							{...props}
							project={project}
							db={db}
							add={addData}
							update={updateData}
							remove={removeData}
							colorPrimary={primaryColor}
						/>
					);
				} else {
					return <Error />;
				}
			} else {
				return <Loading colorPrimary={primaryColor} />;
			}
		};

		this.history.listen((location, action) => {
			setTimeout(() => {
				if (action === 'POP') {
					return;
				}
				window.scrollTo(0, 0);
			});
		});

		return (
			<Router history={this.history}>
				<Switch>
					<Route
						exact
						path='/'
						render={(routeProps) => <HomePage {...routeProps} db={db} colorPrimary={primaryColor} />}
					/>
					<Route
						exact
						path='/projects/new'
						render={(routeProps) => (
							<Page
								{...routeProps}
								db={db}
								add={addData}
								project={{ type: 'form', name: 'Add Project Form' }}
								colorPrimary={primaryColor}
							/>
						)}
					/>
					<Route
						exact
						path='/projects'
						render={(routeProps) => (
							<Page
								{...routeProps}
								db={db}
								project={{ type: 'all', name: 'All Projects' }}
								colorPrimary={primaryColor}
							/>
						)}
					/>
					<Route exact path='/projects/:id' render={getProject} />
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}
