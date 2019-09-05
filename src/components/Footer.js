import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles/FooterStyles';
import Link from '@material-ui/core/Link';
import GithubIcon from '../resources/github.svg';
import IconButton from '@material-ui/core/IconButton';

class Footer extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Link className={classes.link} href='#'>
					About
				</Link>
				<Link className={classes.link} href='#'>
					Contact
				</Link>
				<br />
				<a href='https://github.com/GreatGameDota' target='_blank' rel='noopener noreferrer' className={classes.button}>
					<IconButton className={classes.button} aria-label='github'>
						<img src={GithubIcon} alt='github' width='30px' height='30px' />
					</IconButton>
				</a>
				<br />
				<div className={classes.rights}>© 2019 GreatGameDota</div>
			</div>
		);
	}
}

export default withStyles(styles)(Footer);
