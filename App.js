// import React from 'react';
// import { StyleSheet, View, StatusBar } from 'react-native';
// import { Recommendation, Form, WhyScreen } from './src/screens';


// export default function App() {
// 	return (
// 		<View style={styles.wrapp}>
// 			<StatusBar
// 				backgroundColor='#fff'
// 				barStyle='dark-content' />

// 			<Form
// 				fetch={true} /> */}

// 			<Recommendation
// 				name='Анна' />

// 			<WhyScreen />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	wrapp: {
// 		flex: 1,
// 	}
// });

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

//nav 
import StackNavigation from './src/screens/StackNavigation.navigation';
import TabNavigation from './src/screens/TabNavigation.navigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
	return (
		<NavigationContainer>

			<StatusBar
				backgroundColor='#fff'
				barStyle='dark-content' />

			<TabNavigation />
		</NavigationContainer>
	);
};

export default App;
