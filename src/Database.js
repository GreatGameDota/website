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
		this.getData();
	}
	componentDidUpdate (prevProps, prevState) {
		if (prevState !== this.state) {
			this.writeData();
		}
	}
	writeData = () => {
		Firebase.database().ref('/').set(this.state);
	};
	getData = () => {
		let ref = Firebase.database().ref('/');
		ref.on('value', (snapshot) => {
			const state = snapshot.val();
			this.setState(state);
		});
	};
	addData = (data, model) => {
		switch (model) {
			case 'user':
				data = { uid: new Date().getTime().toString(), name: 'test name' };
				this.setState((prevState) => ({
					users: [ ...prevState.users, data ]
				}));
				break;
			case 'project':
				data = { uid: new Date().getTime().toString(), path: '/projects/Project1', name: 'Project1' };
				this.setState((prevState) => ({
					projects: [...prevState.projects, data]
				}));
				break;
			default: 
				console.log('Specify a data model')
		}
	};
	removeData = (newData, model) => {
		let newState = 0;
		switch (model) {
			case 'user':
				newData = this.state.users[0];
				const { users } = this.state;
				newState = users.filter((data) => {
					return data.uid !== newData.uid;
				});
				this.setState({ users: newState });
				break;
			case 'project':
				newData = this.state.projects[0];
				const { projects } = this.state;
				newState = projects.filter((data) => {
					return data.uid !== newData.uid;
				});
				this.setState({ projects: newState });
				break;
			default: 
				console.log('Specify a data model')
		}
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
