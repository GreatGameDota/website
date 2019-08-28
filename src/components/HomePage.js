import React from 'react';
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
	root: {
		// display: 'flex'
	},
	appBar: {
		width: '100%',
		backgroundColor: (props) => props.colorPrimary[500]
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('xl')]: {
			display: 'none'
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		minHeight: '16px'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	drawerPaper: {
		width: drawerWidth
	},
	navTitle: {
		fontSize: '1.25rem',
		lineHeight: '1.6',
		margin: 0,
		paddingTop: '1rem',
		paddingLeft: '24px',
		display: 'block',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis'
	},
	content: {
		padding: '0 8px',
		width: '100%',
		height: '100vh',
		paddingTop: '72px'
	},
	jumbotron: {
		fontSize: '5rem',
		display: 'block',
		color: '#000000',
		textAlign: 'center',
		paddingTop: '25vh'
	},
	button: {
		color: (props) => props.colorPrimary[500],
		border: '1px solid',
		borderColor: (props) => props.colorPrimary[200],
		fontSize: '2rem',
		margin: '16px',
		'&:hover': {
			borderColor: (props) => props.colorPrimary[800],
			backgroundColor: (props) => props.colorPrimary[50]
		}
	},
	progress: {
		margin: '8px',
		color: (props) => props.colorPrimary[500]
	}
}));

const GlobalTheme = createMuiTheme(GlobalStyles);

function HomePage (props) {
	const { container, location, history, colorPrimary } = props;
	const title = 'Home Page';
	let { db } = props;
	if (typeof db === 'undefined') db = null;
	const classes = styles(props);
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);
	function handleDrawerToggle () {
		setMobileOpen(!mobileOpen);
	}
	function handleDrawerClose () {
		setMobileOpen(false);
	}
	function handleClick () {
		history.push('/projects/new');
	}
	const drawer = (
		<div>
			<div className={classes.navTitle}>{title}</div>
			<div className={classes.toolbar} />
			<Divider />
			<Nav closeDrawer={handleDrawerClose} db={db} colorPrimary={colorPrimary} loc={location.pathname} />
			<Divider />
			<List>
				{[ 'Temp button' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							<MailIcon />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<ThemeProvider theme={GlobalTheme}>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position='fixed' className={classes.appBar}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							{title}
						</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label='nav buttons'>
					<Hidden implementation='css'>
						<Drawer
							container={container}
							variant='temporary'
							anchor={theme.direction === 'rtl' ? 'right' : 'left'}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.jumbotron}>
						Welcome!
						<br />
						<Button variant='outlined' color='primary' size='large' className={classes.button} onClick={handleClick}>
							Get started
						</Button>
					</div>
				</main>
			</div>
		</ThemeProvider>
	);
}

export default HomePage;
