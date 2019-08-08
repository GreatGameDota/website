import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

function ListItemLink (props) {
	const { to, open, name, button, ...other } = props;
	const listItem = button ? (
		<ListItem button component={Link} to={to} {...other}>
			<ListItemText primary={name} />
			{open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
		</ListItem>
	) : (
		<ListItem button to={to} {...other}>
			<ListItemText primary={name} />
			{open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
		</ListItem>
	);
	return <li> {listItem} </li>;
}

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		padding: '10px'
	},
	lists: {
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	progress: {
		marginLeft: '96px',
		marginTop: '8px'
	}
});

class Nav extends Component {
	state = {
		open: true
	};

	handleClick = () => {
		this.setState((state) => ({ open: !state.open }));
	};

	render () {
		const { classes, closeDrawer, colorPrimary } = this.props;
		let { db } = this.props;
		if (db !== null && db.projects.length === 0) db = null;
		return (
			<div className={classes.root}>
				<nav className={classes.lists} aria-label='mailbox folders'>
					<List>
						<div onClick={closeDrawer}>
							<ListItemLink to='/' name='Home' button={true} />
							<List>
								<ListItem component={Link} to='/projects/add' button>
									<ListItemIcon>
										<Icon>add_circle</Icon>
									</ListItemIcon>
									<ListItemText primary='Add Project' />
								</ListItem>
							</List>
						</div>
						<ListItemLink
							to='/projects'
							open={this.state.open}
							onClick={this.handleClick}
							name='Projects'
							button={false}
						/>
						<Collapse component='li' in={this.state.open} timeout='auto' unmountOnExit>
							<List disablePadding>
								<div onClick={closeDrawer}>
									{db !== null ? (
										db.projects.map((project) => (
											<ListItemLink
												to={project.path}
												className={classes.nested}
												name={project.name}
												button={true}
												key={project.uid}
											/>
										))
									) : (
										<CircularProgress size={24} className={classes.progress} style={{ color: colorPrimary }} />
									)}
								</div>
							</List>
						</Collapse>
					</List>
				</nav>
			</div>
		);
	}
}

export default withStyles(styles)(Nav);
