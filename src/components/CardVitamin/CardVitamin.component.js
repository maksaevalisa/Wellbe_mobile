import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './CardVitamin.styles';

const CardVitamin = ({ name, text, index }) => {
	return (
		<View
			style={styles.container}
			key={index}>

			<View style={styles.vitaminNameContainer}>
				<Text style={styles.vitaminNameText}>{name}</Text>
			</View>

			<View style={styles.vitaminTextContainer} >
				<Text style={styles.vitaminTitle}>{text}</Text>
			</View>
		</View>
	);
}

export default CardVitamin;