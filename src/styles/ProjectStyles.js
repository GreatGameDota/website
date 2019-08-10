export default {
	root: {
		display: 'grid',
		gridGap: '4px',
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
		gridArea: 'delete',
		justifySelf: 'end'
	},
	deleteText: {
		fontSize: '17px',
		letterSpacing: '0.02857em'
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
		margin: '4px'
	},
	desc: {
		gridArea: 'desc',
		justifySelf: 'center'
	}
};
