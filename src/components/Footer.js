import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles/FooterStyles';

class Footer extends Component {
	render () {
		const { classes, colorPrimary } = this.props;
		return (
			<div className={classes.root} style={{ backgroundColor: colorPrimary }}>
				Footer
			</div>
		);
	}
}

export default withStyles(styles)(Footer);
