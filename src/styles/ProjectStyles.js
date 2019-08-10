export default {
	root: {
		display: 'grid',
		gridTemplateAreas: `'_ title github'
												'lang desc delete'`
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
		marginBottom: '150px'
	},
	colorPrimary: {
		backgroundColor: (props) => props.brightPrimary
	},
	barColorPrimary: {
		backgroundColor: (props) => props.colorPrimary
	},
	langContainer: {
		gridArea: 'lang'
	},
	lang: {
		float: 'left',
		fontSize: '17px',
		paddingRight: '4px'
	},
	chip: {
		margin: '1px'
	},
	desc: {
		gridArea: 'desc',
		justifySelf: 'center'
	}
};
