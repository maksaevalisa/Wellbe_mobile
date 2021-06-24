import React from 'react';
import { Text, View, Image } from 'react-native';

//styles
import styles from './StartScreen.styles';

//component
import ButtonNext from '../../components/ButtonNext/ButtonNext.component';

//nav
import { useNavigation } from '@react-navigation/native';

const StartScreen = ({ onPress }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image source={require('../../assets/images/Questionnaire.jpg')} style={styles.image} />

			<View style={styles.content}>
				<Text style={styles.question}>Подбор витаминов</Text>
				<Text style={styles.paragraph}>Ответьте на вопросы о вас и вашем образе жизни</Text>
				<Text style={styles.paragraph}>Приложите результаты анализов, если они у вас есть</Text>
			</View>

			<View style={styles.buttonContainer}>
				<ButtonNext
					title='Начать'
					onPress={onPress}
					style={{ width: '100%', }} />
			</View>
		</View>
	)
}

export default StartScreen;