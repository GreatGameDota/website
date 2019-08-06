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
		data = { uid: new Date().getTime().toString(), name: 'test name' };
		Firebase.database().ref('/').child(model).set([ ...this.state[model], data ]);
	};
	removeData = (newData, model) => {
		newData = this.state[model][0];
		const newState = this.state[model].filter((data) => {
			return data.uid !== newData.uid;
		});
		Firebase.database().ref('/').child(model).set(newState);
	};
	updateData = (newData, model) => {
		newData = { uid: '1565049730183', name: 'test update name' };
		const devIndex = this.state[model].findIndex((data) => {
			return data.uid === newData.uid;
		});
		if (devIndex > -1) {
			Firebase.database().ref('/').child(model).child(devIndex.toString()).set(newData);
		} else {
			console.log('No item with that id');
		}
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
