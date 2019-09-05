export default {
	root: {
		margin: '0 auto',
		width: '40%',
		minWidth: '200px'
	},
	progress: {
		marginBottom: '150px'
	},
	colorPrimary: {
		backgroundColor: (props) => props.colorPrimary[100]
	},
	barColorPrimary: {
		backgroundColor: (props) => props.colorPrimary[500]
	},
	avatar: {
		fontSize: '0.8rem'
	},
	jumbotron: {
		fontSize: '2rem',
		display: 'block',
		color: '#000000',
		textAlign: 'center'
	}
};
