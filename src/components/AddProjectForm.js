import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/AddProjectFormStyles';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class AddProjectForm extends Component {
	addProject = (project) => {
		project['path'] = `/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`;
		this.props.add(project, 'projects');
	};
	render () {
		const { classes } = this.props;
		const initialValues = { name: '' };
		return (
			<div className={classes.root}>
				<Formik
					initialValues={initialValues}
					validate={(values) => {
						let errors = {};
						if (!values.name) {
							errors.name = 'Required';
						} else if (values.name.replace(/ /g, '').length > 20) {
							errors.name = "Name can't be longer than 20 characters";
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						this.addProject(values);
						setSubmitting(false);
						resetForm(initialValues);
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Field type='name' name='name' />
							<span className={classes.error}>
								<ErrorMessage name='name' />
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
