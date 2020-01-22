import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from 'react-router-dom';
import styles from '../styles/OverviewStyles';

class Overview extends Component {
	render () {
		const { classes, db } = this.props;
		const nameAbbrev = {
			JavaScript: 'JS',
			Java: 'Java',
			HTML: 'HTML',
			Cpp: 'C++',
			Python: 'Py',
			JupyterNotebook: 'ipynb'
		};
		const colors = {
			JavaScript: '#f1e05a',
			Java: '#b07219',
			HTML: '#e34c26',
			Cpp: '#f34b7d',
			Python: '#3572A5',
			JupyterNotebook: '#DA5B0B'
		};
		if (db && db.projects.length !== 0) {
			return (
				<div className={classes.root}>
					<div className={classes.jumbotron}>Overview of all my projects</div>
					<List>
						{db.projects.map((project) => (
							<ListItem component={Link} to={`/projects/${project.path}`} button key={project.uid}>
								<ListItemAvatar>
									<Avatar className={classes.avatar} style={{ backgroundColor: colors[project.lang] }}>
										{nameAbbrev[project.lang]}
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary={project.name} secondary={project.desc} />
								<ListItemSecondaryAction>
									<IconButton edge='end' aria-label='delete'>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
						))}
					</List>
				</div>
			);
		} else {
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
}

export default withStyles(styles)(Overview);
