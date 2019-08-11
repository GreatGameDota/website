import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ProjectStyles';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import GithubIcon from '../resources/github.svg';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Chip from '@material-ui/core/Chip';
import Icon from '@material-ui/core/Icon';

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
		this.props.history.push('/');
	};

	componentDidMount () {
		this.updateData(this.props.project);
	}

	render () {
		const { classes, project } = this.props;
		const { updating } = this.state;
		if (!updating) {
			return (
				<div>
					<div className={classes.root}>
						<div className={classes.title}>{project.name}</div>
						<a href={project.link} target='_blank' rel='noopener noreferrer' className={classes.button}>
							<Tooltip title='Github Source' placement='left' TransitionComponent={Zoom}>
								<IconButton className={classes.button} aria-label='github'>
									<img src={GithubIcon} alt='github' width='45px' height='45px' />
								</IconButton>
							</Tooltip>
						</a>
						<Tooltip title='Delete This Project' placement='left' TransitionComponent={Zoom}>
							<Button onClick={this.deleteProject} variant='contained' color='secondary' className={classes.delete}>
								<span className={classes.deleteText}>Delete</span>
								<DeleteIcon className={classes.rightIcon} />
							</Button>
						</Tooltip>
						<div className={classes.langContainer}>
							<Icon>code</Icon>
							<div className={classes.lang}>{project.lang}</div>
						</div>
						<div className={classes.desc}>{project.desc}</div>
					</div>
					<div>{project.topics.map((topic, index) => <Chip label={topic} className={classes.chip} key={index} />)}</div>
					<br />
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

export default withStyles(styles)(Project);
