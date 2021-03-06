import React, { Component } from 'react';
import config from './dbConfig';
import Firebase from 'firebase';
Firebase.initializeApp(config);

export default class Database extends Component {
	state = config.reset;

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
		data['uid'] = new Date().getTime().toString();
		Firebase.database().ref('/').child(model).set([ ...this.state[model], data ]);
	};

	removeData = (newData, model) => {
		const newArr = this.state[model].filter((data) => {
			return data.uid !== newData.uid;
		});
		let newState = {};
		newState[model] = newArr;
		this.setState(newState);
	};

	updateData = (newData, model) => {
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
				removeData: this.removeData,
				updateData: this.updateData
			});
		});
		return <div>{children}</div>;
	}
}
