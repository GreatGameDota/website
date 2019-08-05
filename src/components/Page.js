import React from 'react';
import Nav from './Nav';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Project1 from './Project1';
import HomePage from './HomePage';
import Footer from './Footer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: '100%',
		backgroundColor: '#000000',
		zIndex: theme.zIndex.drawer + 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
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
		paddingLeft: '25px',
		paddingTop: '20px',
		fontSize: '20px'
	},
	content: {
		padding: '0 8px',
		width: '100%',
		paddingTop: 'calc(64px + 8px)'
	},
	footer: {
		[theme.breakpoints.up('sm')]: {
			marginLeft: drawerWidth
		}
	},
	progress: {
		margin: '8px'
	}
}));

const pages = [ <HomePage />, <Project1 /> ];

function HideOnScroll (props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });
	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
}

function Page (props) {
	const { container, title, page, add, remove } = props;
	let { testDB } = props;
	if (typeof testDB === 'undefined') testDB = null;
	const classes = useStyles();
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);
	const renderPage = pages[page];
	function handleDrawerToggle () {
		setMobileOpen(!mobileOpen);
	}
	function handleDrawerClose () {
		setMobileOpen(false);
	}
	const drawer = (
		<div>
			<div className={classes.navTitle}>{title}</div>
			<div className={classes.toolbar} />
			<Nav closeDrawer={handleDrawerClose} />
			<Divider />
			<List>
				{[ '2' ].map((text, index) => (
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
		<div>
			<div className={classes.root}>
				<CssBaseline />
				<HideOnScroll {...props}>
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
				</HideOnScroll>
				<nav className={classes.drawer} aria-label='mailbox folders'>
					<Hidden smUp implementation='css'>
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
					<Hidden xsDown implementation='css'>
						<Drawer
							classes={{
								paper: classes.drawerPaper
							}}
							variant='permanent'
							open
						>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					{renderPage}
					{testDB !== null ? (
						<div>
							{testDB.users.map((user) => user.name + ' ')}
							<Button variant='contained' onClick={add}>
								Add Data
							</Button>
							<Button variant='contained' onClick={remove}>
								Delete Data
							</Button>
						</div>
					) : (
						<CircularProgress size={24} className={classes.progress} />
					)}
				</main>
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</div>
	);
}

export default Page;
