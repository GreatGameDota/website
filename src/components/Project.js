import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/ProjectStyles';
import GithubIcon from '../resources/github.svg';

class Project extends Component {
	state = {
		updating: false
	};
	updateData = (project) => {
		this.setState({ updating: true });
		fetch(`http://api.github.com/repos/GreatGameDota/${project.repo}`).then((res) => res.json()).then(
			(result) => {
				project['lang'] = result.language;
				project['desc'] = result.description;
				project['homepage'] = result.homepage;
				fetch(`http://api.github.com/repos/GreatGameDota/${project.repo}/topics`, {
					headers: { Accept: 'application/vnd.github.mercy-preview+json' }
				})
					.then((res) => res.json())
					.then(
						(result) => {
							project['topics'] = result.names;
							this.props.update(project, 'projects');
							this.setState({ updating: false });
						},
						(err) => {
							console.log(`Error: ${err}`);
						}
					);
			},
			(err) => {
				console.log(`Error: ${err}`);
			}
		);
	};
	deleteProject = () => {
		this.props.remove(this.props.project, 'projects');
	};
	componentDidMount () {
		this.updateData(this.props.project);
	}
	render () {
		const { classes, project, colorPrimary } = this.props;
		const { updating } = this.state;
		if (!updating) {
			return (
				<div className={classes.root}>
					<div className={classes.title}>{project.name} </div>
					<a href={project.link} className={classes.button}>
						<IconButton className={classes.button} aria-label='github'>
							<img src={GithubIcon} alt='github' width='35px' height='35px' />
						</IconButton>
					</a>
					<Button onClick={this.deleteProject} variant='contained' color='secondary' className={classes.delete}>
						Delete
						<DeleteIcon className={classes.rightIcon} />
					</Button>
				</div>
			);
		} else {
			return <CircularProgress size={48} className={classes.progress} style={{ color: colorPrimary }} />;
		}
	}
}

export default withStyles(styles)(Project);
