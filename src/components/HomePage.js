import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/HomePageStyles';

class HomePage extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				Home Page!
				<br />
			</div>
		);
	}
}

export default withStyles(styles)(HomePage);
