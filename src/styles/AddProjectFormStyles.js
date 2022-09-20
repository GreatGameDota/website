export default (theme) => ({
	root: {
		width: '50%',
		height: '50vh',
		maxWidth: '800px',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2)
	},
	content: {
		marginTop: theme.spacing(10),
		textAlign: 'center'
	},
	error: {
		color: 'red',
		padding: '8px'
	},
	button: {
		color: (props) => props.colorPrimary[500],
		borderColor: (props) => props.colorPrimary[500]
	}
});