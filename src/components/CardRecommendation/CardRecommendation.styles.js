import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginRight: 16,
		borderRadius: 10,
		paddingTop: 16,
		paddingHorizontal: 16,
		borderColor: '#7F8081',
		borderWidth: 0.3,
	},
	vitaminContainer: {
		flexDirection: 'row',
		marginBottom: 16,
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
		paddingLeft: 12,
		justifyContent: 'center',
	},
	vitaminTitle: {
		width: 190,
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
	},
	vitaminDescription: {
		fontSize: 16,
		color: '#7F8081',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
	},
	tabsContainer: {
		height: 255
	},
	moreDetails: {
		height: 44,
		alignItems: 'center',
		borderTopColor: '#E3E3E3',
		borderTopWidth: 1,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	moreDetailsText: {
		fontSize: 16,
		color: '#7F8081',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
		marginRight: 4
	}
});

export default styles;