import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

//styles
import styles from './CourseScreen.styles';

//components
import { InfoCard } from '../../components';

//other deps
import { appFormsAPI } from "../../api/api";
import SyncStorage from 'sync-storage';

const Card = () => {
	return (
		<View style={styles.card}>
			<Image source={require('../../assets/images/warn.png')} style={styles.image} />

			<Text style={styles.cardText}>Сегодня вы не выпили все необходимые витамины!</Text>
		</View>
	)
}

const CardVitamin = ({ name }) => {
	const [isPress, setIsPress] = React.useState(false);

	return (
		<TouchableOpacity
			style={[styles.cardVitamin, { borderColor: isPress ? '#4C4CFF' : '#7F8081' }]}
			activeOpacity={0.7}
			onPress={() => {
				setIsPress(!isPress)
			}}>

			<Text style={styles.cardVitaminText}>{name}</Text>
		</TouchableOpacity>
	)
}

const CourseScreen = () => {
	const [analyses, setAnalyses] = useState([])
	const tokenRecommendations = SyncStorage.get('tokenRecommendations');

	const [idSurvey, setIdSurvey] = useState(null)

	useEffect(() => {
		appFormsAPI.getDataRecommendationsDetailed(tokenRecommendations)
			.then(response => {
				setIdSurvey(response.data.id)
				SyncStorage.set('sessionIdSurvey', response.data.id)
				setAnalyses(response.data.data.recommendated_analyses)
			}).catch(error => {
			})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.stepDaysContatiner}>
				<Text style={styles.stepDayText}>День 2</Text>
				<Text style={styles.countDaysText}>/30</Text>
			</View>

			<Card />

			<Text style={styles.title}>Ваши витамины на сегодня:</Text>
			<Text style={styles.description}>Отметьте, какие витамины вы уже выпили</Text>

			<View
				style={styles.cardVitaminContainer}>

				{analyses.map((analyse) => {
					return (
						<CardVitamin name={analyse.char_code}
							index={idSurvey} />)
				})}
			</View>

			<InfoCard
				style={{ backgroundColor: '#EFF5F4' }}
				imageUrlFirst={require(`../../assets/images/tabler_pill.png`)}
				imageUrlSecond={require(`../../assets/images/water.png`)}
				title='Инструкция по приему витаминов'
				descriptionFirst='Принимайте добавки в начале дня вместе с едой'
				descriptionSecond='Запивайте каждую капсулу половиной стакана воды' />
		</View>
	)
};

export default CourseScreen;