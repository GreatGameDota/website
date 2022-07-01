import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/AddProjectFormStyles';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class AddProjectForm extends Component {
	state = {
		error: ''
	};

	addProject = (project) => {
		fetch(`https://api.github.com/repos/GreatGameDota/${project.repo}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					this.setState({ error: ` ${res.statusText} Invalid Project Name` });
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
			.catch((e) => console.error(`${e} - Invalid Project Name`));
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
			<div className={classes.root}>
				<Formik
					initialValues={initialValues}
					validate={(values) => {
						this.setState({ error: '' });
						let errors = {};
						if (!values.repo) {
							errors.repo = ' Required';
						}
						if (db.projects.some(e => e.repo === values.repo)) {
							errors.repo = ' Project Already Added';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						this.addProject(values).then((result) => {
							setSubmitting(false);
							if (!this.state.error) {
								resetForm(initialValues);
							}
						});
					}}
					validateOnBlur={false}
					validateOnChange={false}
				>
					{({ isSubmitting }) => (
						<Form>
							<label htmlFor='repo'>Github Repo Name </label>
							<Field type='text' name='repo' id='repo' placeholder='Repo Name' />
							<span className={classes.error}>
								<ErrorMessage name='repo' />
								{this.state.error}
							</span>
							<br />
							<button type='submit' disabled={isSubmitting}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}

export default withStyles(styles)(AddProjectForm);
