import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/Page';
import HomePage from './components/HomePage';
import Loading from './components/Loading';
import Error from './components/404';
import primaryColor from '@material-ui/core/colors/blue'; // 50-900

const colorPrimary = primaryColor[800],
	brightPrimary = primaryColor[100];

export default class Routes extends Component {
	history = createBrowserHistory(this.props);

	render () {
		const { db, addData, removeData, updateData } = this.props;

		const getProject = (props) => {
			let path = props.match.params.id;
			if (db.projects.length > 0) {
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
							colorPrimary={colorPrimary}
							brightPrimary={brightPrimary}
						/>
					);
				} else {
					return <Error />;
				}
			} else {
				return <Loading colorPrimary={colorPrimary} brightPrimary={brightPrimary} />;
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
					<Route exact path='/' render={(routeProps) => <HomePage {...routeProps} colorPrimary={colorPrimary} />} />
					<Route
						exact
						path='/projects/new'
						render={(routeProps) => (
							<Page
								{...routeProps}
								db={db}
								add={addData}
								project={{ type: 'form', name: 'Add Project Form' }}
								colorPrimary={colorPrimary}
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
