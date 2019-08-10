export default {
	root: {
		display: 'grid',
		gridTemplateAreas: `'_ title github'
												'lang body delete'`
												// 'tags body body'`
	},
	title: {
		fontSize: '2em',
		fontWeight: 'bold',
		gridArea: 'title',
		justifySelf: 'center'
	},
	button: {
		padding: '6px',
		gridArea: 'github',
		justifySelf: 'end'
	},
	delete: {
		letterSpacing: '0.02857em',
		gridArea: 'delete',
		justifySelf: 'end'
	},
	rightIcon: {
		marginLeft: '8px'
	},
	progress: {
		marginTop: '8px',
		marginBottom: '100px',
		display: 'block',
		margin: '0 auto'
	}
};
