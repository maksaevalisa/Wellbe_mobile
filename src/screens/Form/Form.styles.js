import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingTop: 44
	},
	content: {
		marginBottom: 72,
		width: '100%',
	},
	textSteps: {
		fontSize: 16,
		color: '#3F3F3F',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
		marginBottom: 8,
	},
	question: {
		fontSize: 22,
		lineHeight: 30.8,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
	},
	paragraph: {
		marginTop: 16,
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		position: 'absolute',
		bottom: 16,
	},
	text: {
		fontSize: 18,
		color: '#7F8081',
		fontFamily: 'Graphik-Medium',
	},
	loadingText: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
		marginBottom: 16,
		textAlign: 'center'
	}
});

export default styles;