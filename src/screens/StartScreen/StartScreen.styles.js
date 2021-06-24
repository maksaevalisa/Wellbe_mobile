import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: 44
	},
	content: {
		paddingHorizontal: 16,
		marginTop: 24
	},
	image: {
		width: '100%',
	},
	question: {
		width: '90%',
		fontSize: 22,
		lineHeight: 30.8,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		marginBottom: 24
	},
	paragraph: {
		width: '90%',
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
		marginBottom: 16,
	},
	buttonContainer: {
		paddingHorizontal: 16,
		width: '100%',
		position: 'absolute',
		bottom: 16,
	},
});

export default styles;