import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';

import Firebase from 'firebase';
import config from './dbConfig';
/*
	Made by: GreatGameDota
	https://github.com/GreatGameDota
*/

class App extends Component {
	state = {
		users: []
	};
	constructor (props) {
		super(props);
		Firebase.initializeApp(config);
	}
	componentDidMount () {
		this.getUserData();
	}
	componentDidUpdate (prevProps, prevState) {
		if (prevState !== this.state) {
			this.writeUserData();
		}
	}
	writeUserData = () => {
		Firebase.database().ref('/').set(this.state);
	};
	getUserData = () => {
		let ref = Firebase.database().ref('/');
		ref.on('value', (snapshot) => {
			const state = snapshot.val();
			this.setState(state);
		});
	};
	removeData = (user) => {
		user = this.state.users[0];
		const { users } = this.state;
		const newState = users.filter((data) => {
			return data.uid !== user.uid;
		});
		this.setState({ users: newState });
	};
	addData = (data) => {
		data = { uid: new Date().getTime().toString(), name: 'test name' };
		this.setState((prevState) => ({
			users: [ ...prevState.users, data ]
		}));
	};
	// handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	let name = this.refs.name.value;
	// 	let uid = this.refs.uid.value;

	// 	if (uid && name && role) {
	// 		const { developers } = this.state;
	// 		const devIndex = developers.findIndex((data) => {
	// 			return data.uid === uid;
	// 		});
	// 		developers[devIndex].name = name;
	// 		developers[devIndex].role = role;
	// 		this.setState({ developers });
	// 	} else if (name && role) {
	// 		const uid = new Date().getTime().toString();
	// 		const { developers } = this.state;
	// 		developers.push({ uid, name, role });
	// 		this.setState({ developers });
	// 	}

	// 	this.refs.name.value = '';
	// 	this.refs.uid.value = '';
	// };
	render () {
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
								testDB={this.state}
								add={this.addData}
								remove={this.removeData}
								page={0}
							/>
						)}
					/>
					<Route
						exact
						path='/projects/project1'
						render={(routeProps) => <Page {...routeProps} title='Project1' testDB={this.state} page={1} />}
					/>
					<Redirect to='/' />
				</Switch>
			</Router>
		);
	}
}

export default App;
