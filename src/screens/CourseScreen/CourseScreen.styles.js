import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingTop: 44,
	},
	stepDaysContatiner: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		marginBottom: 16
	},
	stepDayText: {
		fontSize: 32,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
	},
	countDaysText: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 25.2,
		marginLeft: 5,
		marginBottom: 5
	},
	card: {
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#FFF9EF',
		borderRadius: 15,
		padding: 20,
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 12
	},
	cardText: {
		fontSize: 16,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 22.4,
	},
	title: {
		fontSize: 18,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
		lineHeight: 25.2,
		marginTop: 16
	},
	description: {
		fontSize: 14,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Regular',
		lineHeight: 19.6,
		marginTop: 8
	},
	cardVitaminContainer: {
		marginTop: 16,
		marginBottom: 24,
		flexDirection: 'row',
	},
	cardVitamin: {
		marginRight: 12,
		width: 84,
		height: 84,
		borderRadius: 10,
		borderColor: '#7F8081',
		borderWidth: 0.5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	cardVitaminActive: {
		marginRight: 12,
		width: 84,
		height: 84,
		borderRadius: 10,
		borderColor: '#4C4CFF',
		borderWidth: 0.3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	cardVitaminText: {
		fontSize: 32,
		color: '#1B1C1E',
		fontFamily: 'Graphik-Medium',
	},
});

export default styles;