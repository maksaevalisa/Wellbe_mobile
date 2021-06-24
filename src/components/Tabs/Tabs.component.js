import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './Tabs.styles';

const Tabs = ({ title }) => {
	return (
		<View style={styles.tab}>
			<Text style={styles.tabText}>{title}</Text>
		</View>
	)
}

export default Tabs;