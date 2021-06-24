import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//styles
import styles from './ButtonNext.styles';

export default function ButtonNext({ onPress, title, disabledButton, style }) {
	return (
		<TouchableOpacity
			disabled={disabledButton}
			style={[styles.wrapp, {
				opacity: disabledButton ? 0.4 : 1,
			}, style]}
			activeOpacity={0.8}
			onPress={onPress}>

			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}