import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginRight: 16,
		borderRadius: 10,
		padding: 16,
		borderColor: '#7F8081',
		borderWidth: 0.3,
		flexDirection: 'row',
	},
	vitaminNameContainer: {
		width: 78,
		height: 78,
		alignItems: 'center',
		justifyContent: 'center',
	},
	vitaminNameText: {
		fontSize: 40,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 56,
	},
	vitaminTextContainer: {
		width: 188,
		paddingLeft: 12,
		justifyContent: 'center',
	},
	vitaminTitle: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
	},
});

export default styles;