import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 20,
		borderRadius: 10
	},
	content: {
		width: '100%',
		flexDirection: 'row',
	},
	title: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 25,
		marginBottom: 20,
	},
	image: {
		flex: 1,
		width: 36,
		height: 36,
	},
	description: {
		flex: 7,
		paddingLeft: 8,
		fontSize: 16,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
	},
});

export default styles;