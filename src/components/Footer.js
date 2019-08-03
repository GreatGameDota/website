import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles/FooterStyles';

class Footer extends Component {
	render () {
		const { classes } = this.props;
		return <div className={classes.root}>Footer</div>;
	}
}

export default withStyles(styles)(Footer);
