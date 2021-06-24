import React from 'react';

//screens
import { Form, Recommendation, CourseScreen } from '../screens';
import SurveysMiddleware from './SurveysMiddleware';

//nav
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RecomendationNavigation = () => (
	<Stack.Navigator
		initialRouteName='recommendation'>

		<Stack.Screen
			name='recommendation'
			component={Recommendation}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='courseScreen'
			component={CourseScreen}
			options={{
				headerShown: false,
			}} />
	</Stack.Navigator>
)

const FormNavigation = () => (
	<Stack.Navigator
		initialRouteName='surveysMiddleware'>

		<Stack.Screen
			name='surveysMiddleware'
			component={SurveysMiddleware}
			options={{
				headerShown: false,
			}} />

		<Stack.Screen
			name='form'
			component={Form}
			options={{
				headerShown: false,
			}} />
	</Stack.Navigator>
)

export { RecomendationNavigation, FormNavigation };