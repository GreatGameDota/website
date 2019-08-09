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
		const initialValues = { name: '', link: '' };
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
						if (!values.link) {
							errors.link = 'Required';
						} else if (
							!/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
								values.link
							)
						) {
							errors.link = 'Submit valid link';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						this.addProject(values);
						setSubmitting(false);
						resetForm(initialValues);
					}}
					validateOnBlur={false}
					validateOnChange={false}
				>
					{({ isSubmitting }) => (
						<Form>
							<label for='name'>Project Name </label>
							<Field type='text' name='name' id='name' placeholder='Name' />
							<span className={classes.error}>
								<ErrorMessage name='name' />
							</span>
							<br />
							<label for='link'>Project Link </label>
							<Field type='text' name='link' id='link' placeholder='Link' />
							<span className={classes.error}>
								<ErrorMessage name='link' />
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
