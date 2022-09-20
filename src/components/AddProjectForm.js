import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/AddProjectFormStyles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddProjectForm extends Component {
	state = {
		errors: {}
	};

	addProject = (project) => {
		fetch(`https://api.github.com/repos/GreatGameDota/${project.repo}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					this.setState({ errors: { ...this.state.errors, api: ` ${res.statusText} Invalid Project Name` } });
					throw Error(res.statusText);
				}
			})
			.then((result) => {
				project.name = result.name;
				project['link'] = result.html_url;
				if (result.language === 'C++') {
					project['lang'] = 'Cpp';
				} else {
					project['lang'] = result.language;
				}
				project['desc'] = result.description;
				project['homepage'] = result.homepage;
				project['path'] = project.name.toLowerCase().replace(/\s+/g, '-');
				fetch(`https://api.github.com/repos/GreatGameDota/${project.repo}/topics`, {
					headers: { Accept: 'application/vnd.github.mercy-preview+json' }
				})
					.then((res) => res.json())
					.then((result) => {
						project['topics'] = result.names;
						if (project.topics.length === 0) {
							project.topics.push('No tags');
						}
						this.props.add(project, 'projects');
					});
			})
			.catch((e) => {});
		return new Promise((res, rej) => {
			setTimeout(function () {
				res();
			}, 300);
		});
	};

	render () {
		const { classes, db } = this.props;
		const initialValues = { repo: '' };
		return (
			<Box className={classes.root} borderRadius={4} boxShadow={3}>
				<Formik
					initialValues={initialValues}
					validate={(values) => {
						let errors = {};
						if (values.repo.length === 0) {
							errors.repo = ' Required';
						}
						if (db.projects.some((e) => e.repo === values.repo)) {
							errors.repo = ' Project Already Added';
						}
						this.setState({ errors: errors });
						return errors;
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						this.addProject(values).then((result) => {
							setSubmitting(false);
							// if (Object.keys(this.state.errors).length === 0) {
							// 	resetForm(initialValues);
							// }
						});
					}}
					validateOnBlur={false}
					validateOnChange={false}
				>
					{({ isSubmitting, setFieldValue }) => (
						<Form className={classes.content}>
							<Grid container spacing={2}>
								<Grid item sm={12}>
									<Typography variant='h5'>
										<label htmlFor='repo'>Add Project</label>
									</Typography>
									<TextField
										name='repo'
										id='repo'
										label='Repo Name'
										error={Object.keys(this.state.errors).length !== 0}
										onChange={(event) => setFieldValue('repo', event.target.value)}
									/>
								</Grid>
								<Grid item sm={12}>
									<span className={classes.error}>
										<ErrorMessage name='repo' />
										{this.state.errors.api}
									</span>
								</Grid>
								<Grid item sm={12}>
									<Button
										type='submit'
										disabled={isSubmitting}
										variant='outlined'
										size='large'
										className={classes.button}
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</Box>
		);
	}
}

export default withStyles(styles)(AddProjectForm);
