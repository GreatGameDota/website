import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/HomePageStyles';

class HomePage extends Component {
	static defaultProps = {
		test: "default"
	};
	render () {
		const { classes, test } = this.props;
		return (
			<div className={classes.Home}>
				<h1>HomePage {test}</h1>
			</div>
		);
	}
}
export default withStyles(styles)(HomePage);
