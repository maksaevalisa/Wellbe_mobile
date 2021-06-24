import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './CardAnswer.styles';

const CardAnswer = ({ title, descripton, index }) => {
	return (
		<View style={styles.CardAnswerBox} key={index}>
			<Text style={styles.CardAnswerTitle}>{title}</Text>
			<Text style={styles.CardAnswerDescription}>{descripton}</Text>
		</View>
	)
};

export default CardAnswer;