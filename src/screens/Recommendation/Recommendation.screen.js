import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

//styles
import styles from './Recommendation.styles';

//components
import { CardRecommendation, BottomSheetContainer, CardVitamin, InfoCard, ButtonNext } from '../../components';

//nav
import { useNavigation } from '@react-navigation/native';

//other deps
import { appFormsAPI } from "../../api/api";
import SyncStorage from 'sync-storage';
import { SvgUri } from 'react-native-svg';

const Recommendation = () => {
	const navigation = useNavigation();

	const [recommendations, setRecommendations] = useState([])
	const [fetchRecommendation, setFetchRecommendation] = useState(true)
	const [products, setProducts] = useState([])
	const [analyses, setAnalyses] = useState([])
	const [labels, setLabels] = useState([])
	const sheetRef = React.useRef();
	const [actions, setActions] = useState([]);
	const tokenRecommendations = SyncStorage.get('tokenRecommendations');
	const [surveyNull, setSurveyNull] = useState(true)

	useEffect(() => {
		setFetchRecommendation(true)
		appFormsAPI.getDataRecommendationsDetailed(tokenRecommendations)
			.then(response => {
				setRecommendations(response.data.optional_positions)
				setLabels(response.data.labels)
				setFetchRecommendation(false)
				setProducts(response.data.main_positions)
				setAnalyses(response.data.data.recommendated_analyses)
				setSurveyNull(false)
			}).catch(error => {
				setFetchRecommendation(false)
				setSurveyNull(true)
			})
	}, [])

	if (!fetchRecommendation) {
		if (surveyNull) {
			return (
				<View style={styles.loadingCintainer}>
					<ButtonNext
						title='Пожалуйста, пройдите анкету'
						style={{ width: '100%' }}
						onPress={() => { navigation.navigate('tab/formNavigation') }} />
				</View>
			)
		}
		else return (
			<>
				<ScrollView
					style={styles.container}
					showsVerticalScrollIndicator={false}>

					<View style={[styles.content, { marginTop: 0 }]}>
						<Text style={styles.paragraph}>На основе ваших ответов мы подобрали витамины и полезные добавки, которые помогут вам чувствовать себя лучше</Text>

						<View style={styles.imagesContainer}>
							{labels.map((label) => {
								return (
									<View style={styles.imageBox}>
										<SvgUri
											uri={label.image.image_url}
											width={36}
											height={36} />

										<Text style={styles.imageDescription}>{label.label_text}</Text>
									</View>
								)
							})}
						</View>

						<Text style={[styles.recommendation, { marginTop: 24 }]}>Витамины</Text>
						<Text style={styles.recommendationDescription}>Все добавки отлично сочетаются между собой</Text>
					</View>

					<ScrollView
						style={styles.CardRecommendationContainer}
						horizontal={true}
						showsHorizontalScrollIndicator={false}>

						{products.map((product) => {
							return (
								<CardRecommendation
									setActions={setActions}
									product={product}
									onPress={() => {
										setActions(product.actions)
										sheetRef.current.open()
									}} />
							)
						})}
					</ScrollView>

					<View style={styles.content}>
						<Text style={styles.recommendation}>Дополнительные анализы</Text>

						<Text style={styles.recommendationDescription}>Опрос показал у вас возможен недостаток некоторых витаминов, советуем сдать следующие анализы, чтобы уточнить необходимые дозировки</Text>
					</View>

					<ScrollView
						style={styles.CardRecommendationContainer}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>

						{analyses.map((analyse) => {
							return (
								<CardVitamin name={analyse.char_code} text={analyse.product_name} />)
						})}
					</ScrollView>

					<View style={styles.content}>
						<InfoCard
							style={{ backgroundColor: '#EFF5F4', marginBottom: 16 }}
							imageUrlFirst={require(`../../assets/images/tabler_pill.png`)}
							imageUrlSecond={require(`../../assets/images/water.png`)}
							title='Инструкция по приему витаминов'
							descriptionFirst='Принимайте добавки в начале дня вместе с едой'
							descriptionSecond='Запивайте каждую капсулу половиной стакана воды' />

						<InfoCard
							style={{ backgroundColor: '#FFF9EF' }}
							imageUrlFirst={require(`../../assets/images/stopwatch.png`)}
							imageUrlSecond={require(`../../assets/images/message-square.png`)}
							title='Правильный курс витаминов'
							descriptionFirst='Рекомендуем принимать добавки от 3х месяцев'
							descriptionSecond='Корректируйте состав набора ежемесячно: проходите новую анкету, чтобы указать ваше самочувствие и цели' />
					</View>

					<View style={styles.buttonContainer}>
						<ButtonNext
							style={{ width: '100%' }}
							title='Начать курс'
							onPress={() => { navigation.navigate('courseScreen') }} />
					</View>
				</ScrollView>

				<BottomSheetContainer
					actions={actions}
					sheetRef={sheetRef} />
			</>
		);
	}
	else
		return (
			<View style={styles.container}>
				<View style={[styles.content, { marginTop: 0 }]}>
					<Text style={styles.loadingText}>loading...</Text>
				</View>
			</View>
		)

}

export default Recommendation;