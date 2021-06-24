import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingTop: 44,
	},
	card: {
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingBottom: 16,
		marginBottom: 16,
		borderColor: '#7F8081',
		borderWidth: 0.3,
	},
	image: {
		width: '100%',
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10
	},
	title: {
		fontSize: 22,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 30.8,
		marginTop: 16
	},
	description: {
		fontSize: 14,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 19.6,
		marginTop: 8
	}
});

export default styles;