import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from '../styles/FooterStyles';
import Link from '@material-ui/core/Link';
import GithubIcon from '../resources/github.svg';
import ScratchIcon from '../resources/scratch.svg';
import YoutubeIcon from '../resources/youtube.svg';
import IconButton from '@material-ui/core/IconButton';
import { Link as RouterLink } from 'react-router-dom';

class Footer extends Component {
	render () {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Link color="inherit" className={classes.link} component={RouterLink} to="/about">
					About
				</Link>
				<Link color="inherit" className={classes.link} component={RouterLink} to="/contact">
					Contact
				</Link>
				<Link color="inherit" className={classes.link} component={RouterLink} to="/support">
					Support
				</Link>
				<br />
				<a href='https://github.com/GreatGameDota' target='_blank' rel='noopener noreferrer' className={classes.button}>
					<IconButton className={classes.button} aria-label='github'>
						<img src={GithubIcon} alt='github' width='30px' height='30px' />
					</IconButton>
				</a>
				<a
					href='https://scratch.mit.edu/users/GreatGameDota/'
					target='_blank'
					rel='noopener noreferrer'
					className={classes.button}
				>
					<IconButton className={classes.button} aria-label='scratch'>
						<img src={ScratchIcon} alt='scratch' width='30px' height='30px' />
					</IconButton>
				</a>
				<a
					href='https://www.youtube.com/channel/UC3hwpizkuuZykOZdz5Wx_Vw'
					target='_blank'
					rel='noopener noreferrer'
					className={classes.button}
				>
					<IconButton className={classes.button} aria-label='youtube'>
						<img src={YoutubeIcon} alt='youtube' width='30px' height='30px' />
					</IconButton>
				</a>
				<br />
				<div className={classes.rights}>© 2019 GreatGameDota</div>
			</div>
		);
	}
}

export default withStyles(styles)(Footer);
