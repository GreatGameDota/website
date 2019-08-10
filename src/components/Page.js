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
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import primaryColor from '@material-ui/core/colors/blue'; // 50-900
import { ThemeProvider } from '@material-ui/styles';
import HomePage from './HomePage';
import Footer from './Footer';
import Project from './Project';
import AddProjectForm from './AddProjectForm';
import GlobalStyles from '../styles/GlobalStyles';

const drawerWidth = 240,
	colorPrimary = primaryColor[800],
	brightPrimary = primaryColor[100];

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		width: '100%',
		backgroundColor: colorPrimary,
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
		paddingTop: '72px'
	},
	footer: {
		[theme.breakpoints.up('sm')]: {
			marginLeft: drawerWidth
		}
	},
	progress: {
		margin: '8px',
		color: colorPrimary
	}
}));

const GlobalTheme = createMuiTheme(GlobalStyles);

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
	const { container, title, project, location, add, update, remove } = props;
	let { db } = props;
	if (typeof db === 'undefined') db = null;
	const classes = useStyles();
	const theme = useTheme();
	const [ mobileOpen, setMobileOpen ] = React.useState(false);
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
					<nav className={classes.drawer} aria-label='nav buttons'>
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
						{project === 'home' ? (
							<HomePage colorPrimary={colorPrimary} />
						) : project === 'form' ? (
							<AddProjectForm add={add} colorPrimary={colorPrimary} />
						) : (
							<Project
								project={project}
								add={add}
								remove={remove}
								update={update}
								colorPrimary={colorPrimary}
								brightPrimary={brightPrimary}
							/>
						)}
					</main>
				</div>
				<div className={classes.footer}>
					<Footer colorPrimary={colorPrimary} />
				</div>
			</div>
		</ThemeProvider>
	);
}

export default Page;
