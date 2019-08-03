import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styles from '../styles/Project1Styles';

class Project1 extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div>
				Project1
        <br></br>
				<Button variant='contained' className={classes.button}>
					<a href='https://github.com/GreatGameDota/my-website/archive/master.zip'>Download</a>
				</Button>
			</div>
		);
	}
}
export default withStyles(styles)(Project1);
