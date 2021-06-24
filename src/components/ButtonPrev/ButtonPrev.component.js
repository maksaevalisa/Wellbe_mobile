import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//styles
import styles from './ButtonPrev.styles';

export default function ButtonPrev({ onPress, style }) {
	return (
		<TouchableOpacity
			style={[styles.wrapp, style]}
			activeOpacity={0.8}
			onPress={onPress}>

			<Text style={styles.text}>Назад</Text>
		</TouchableOpacity>
	);
}