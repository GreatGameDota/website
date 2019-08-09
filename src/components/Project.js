import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import styles from '../styles/ProjectStyles';
import GithubIcon from '../resources/github.svg';

class Project extends Component {
	render () {
		const { classes, project } = this.props;
		return (
			<div className={classes.root}>
				<h1>{project.name}</h1>
				<a href={project.link} className={classes.button}>
					<IconButton className={classes.button} aria-label='github'>
						<img src={GithubIcon} alt='github' width='35px' height='35px' />
					</IconButton>
				</a>
			</div>
		);
	}
}

export default withStyles(styles)(Project);
