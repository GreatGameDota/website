import React, { Component } from 'react';
import Firebase from 'firebase';
import config from './dbConfig';

export default class Database extends Component {
	state = config.reset;
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
		// data = { uid: new Date().getTime().toString(), path: '/projects/Project1', name: 'Project1' };
		this.setState((prevState) => ({
			users: [ ...prevState.users, data ]
		}));
	};
	updateData = (event) => {
		event.preventDefault();
		let name = this.refs.name.value;
		let uid = this.refs.uid.value;
		if (uid && name) {
			const { developers } = this.state;
			const devIndex = developers.findIndex((data) => {
				return data.uid === uid;
			});
			developers[devIndex].name = name;
			this.setState({ developers });
		} else if (name) {
			const uid = new Date().getTime().toString();
			this.setState((prevState) => ({
				developers: [ ...prevState.developers, { uid, name } ]
			}));
		}
		this.refs.name.value = '';
		this.refs.uid.value = '';
	};
	render () {
		const children = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, {
				db: this.state,
				addData: this.addData,
				removeData: this.removeData
			});
		});
		return <div>{children}</div>;
	}
}
