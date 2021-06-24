import React from 'react';

//screens
import { Recommendation, BlockScreen } from '../screens';

//nav
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RecomendationNavigation, FormNavigation } from './StackNavigation.navigation';

//other deps
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (name) =>
	({ color }) => <Ionicons name={name} color={color} size={28} />;

const TabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName='tab/formNavigation'
			tabBarOptions={{
				inactiveTintColor: '#000',
				activeTintColor: '#4D4DFF',
				labelStyle: {
					fontSize: 14,
					fontFamily: 'Graphik-Regular',
				}
			}}>

			<Tab.Screen
				name='tab/formNavigation'
				component={FormNavigation}
				options={{
					tabBarLabel: 'Анкета',
					tabBarIcon: getTabBarIcon('ios-document-text-outline'),
				}} />

			<Tab.Screen
				name='tab/recomendationNavigation'
				component={RecomendationNavigation}
				options={{
					tabBarLabel: 'Рекомендации',
					tabBarIcon: getTabBarIcon('ios-receipt-outline'),
				}} />

			<Tab.Screen
				name='tab/blockScreen'
				component={BlockScreen}
				options={{
					tabBarLabel: 'Блог',
					tabBarIcon: getTabBarIcon('newspaper-outline'),
				}} />

		</Tab.Navigator>
	)
}
export default TabNavigation;