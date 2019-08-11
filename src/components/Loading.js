import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import styles from '../styles/LoadingStyles';

class Loading extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div className={classes.progress}>
				<LinearProgress
					classes={{
						colorPrimary: classes.colorPrimary,
						barColorPrimary: classes.barColorPrimary
					}}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(Loading);
