import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const routes = [ 'Home', 'Projects', 'Project1' ];

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
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<nav className={classes.lists} aria-label='mailbox folders'>
					<List>
						<ListItemLink to='/' onClick={this.handleRoute} name={routes[0]} button={true} />
						<ListItemLink
							to='/projects'
							open={this.state.open}
							onClick={this.handleClick}
							name={routes[1]}
							button={false}
						/>
						<Collapse component='li' in={this.state.open} timeout='auto' unmountOnExit>
							<List disablePadding>
								<ListItemLink
									to='/projects/project1'
									className={classes.nested}
									onClick={this.handleRoute}
									name={routes[2]}
									button={true}
								/>
							</List>
						</Collapse>
					</List>
				</nav>
			</div>
		);
	}
}

export default withStyles(styles)(Nav);
