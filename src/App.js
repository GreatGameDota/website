import React, { Component } from 'react';
import Routes from './Routes';
import Database from './Database';
/*
	Made by: GreatGameDota
	https://github.com/GreatGameDota
*/

class App extends Component {
	render () {
		return (
			<Database>
				<Routes />
			</Database>
		);
	}
}

export default App;
