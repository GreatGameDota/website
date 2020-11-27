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
import GitHubButton from 'react-github-btn';
import ReactMarkdown from 'react-markdown';

class Project extends Component {
	state = {
		updating: false
	};

	updateData = (project) => {
		this.setState({ updating: true });
		fetch(`https://api.github.com/repos/GreatGameDota/${project.repo}`).then((res) => res.json()).then((result) => {
			if (result.language === 'C++') {
				project['lang'] = 'Cpp';
			} else if (result.language === 'Jupyter Notebook') {
				project['lang'] = 'JupyterNotebook';
			} else {
				project['lang'] = result.language;
			}
			project['desc'] = result.description;
			project['homepage'] = result.homepage;
			fetch(`https://api.github.com/repos/GreatGameDota/${project.repo}/topics`, {
				headers: { Accept: 'application/vnd.github.mercy-preview+json' }
			})
				.then((res) => res.json())
				.then((result) => {
					project['topics'] = result.names;
					if (project.topics.length === 0) {
						project.topics.push('No tags');
					}
					fetch(`https://raw.githubusercontent.com/GreatGameDota/${project.repo}/master/README.md`)
						.then((response) => response.text())
						.then((text) => {
							project['readme'] = text;
							this.props.update(project, 'projects');
							this.setState({ updating: false });
						});
				});
		});
	};

	deleteProject = () => {
		this.props.remove(this.props.project, 'projects');
		this.props.history.push('/projects');
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
						<div className={classes.button}>
							<a href={project.link} target='_blank' rel='noopener noreferrer' className={classes.button}>
								<Tooltip title='Github Source' placement='left' TransitionComponent={Zoom}>
									<IconButton className={classes.button} aria-label='github'>
										<img src={GithubIcon} alt='github' width='45px' height='45px' />
									</IconButton>
								</Tooltip>
							</a>
							<GitHubButton
								href={`https://github.com/GreatGameDota/${project.repo}`}
								data-size='large'
								data-show-count='true'
								aria-label='Star project on GitHub'
								data-icon='octicon-star'
							>
								Star
							</GitHubButton>
						</div>
						<Tooltip title='Delete This Project' placement='left' TransitionComponent={Zoom}>
							<Button variant='contained' color='secondary' className={classes.delete}>
								<span className={classes.deleteText}>Delete</span>
								<DeleteIcon className={classes.rightIcon} />
							</Button>
						</Tooltip>
						<div className={classes.langContainer}>
							<Icon>code</Icon>
							{project.lang === 'Cpp' ? (
								<div className={classes.lang}>C++</div>
							) : project.lang === 'JupyterNotebook' ? (
								<div className={classes.lang}>Jupyter Notebook</div>
							) : (
								<div className={classes.lang}>{project.lang}</div>
							)}
						</div>
						<div className={classes.desc}>{project.desc}</div>
					</div>
					<div>{project.topics.map((topic, index) => <Chip label={topic} className={classes.chip} key={index} />)}</div>
					<br />
					<div>
						<ReactMarkdown source={project.readme} allowDangerousHtml />
					</div>
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
