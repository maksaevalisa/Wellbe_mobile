import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';

//api
import { surveyAPI } from "../../api/api";

//styles
import styles from './Form.styles';

//components
import { ButtonPrev, ButtonNext, OnBoard, RadioBattons, Inputs, CheckBoxComponent } from '../../components';

//nav
import { useNavigation } from '@react-navigation/native';

//other deps
import SyncStorage from 'sync-storage';
import Spinner from 'react-native-spinkit';

const Form = () => {
	const navigation = useNavigation();

	const [data, setData] = useState();
	const [fetch, setFetch] = useState(true);
	const [phone, setPhone] = useState('');
	const [disabledButton, setDisabledButton] = useState(true);
	const [redirectRecommendation, setRedirectRecommendation] = useState(false);
	const [redirectSurvey, setRedirectSurvey] = useState(false);
	const [tokenRecommendation, setTokenRecommendation] = useState('');
	const [loading, setLoading] = useState(false);
	const [sobralos, setSobralos] = useState(false)

	const idSession = SyncStorage.get('sessionIdSurvey');

	const Loading = () => {
		setFetch(true)

		setTimeout(() => {
			if (SyncStorage.get('redirectRecommendation') == 'false') {
				SyncStorage.set('redirectRecommendation', 'true')
				surveyAPI.smsRegistrationWithoutData(idSession)
					.then(resa => {
						setTokenRecommendation(resa.data.detailed_recommendation_uuid);
						SyncStorage.set('sessionIdSurvey', null)
						SyncStorage.set('tokenRecommendations', resa.data.detailed_recommendation_uuid)

						setRedirectRecommendation(true)
					}).catch(er => {
						console.log('Error getToken')
					})
			}
		}, 1200)

		if (redirectRecommendation) {
			navigation.reset({
				index: 0,
				routes: [{ name: 'tab/recomendationNavigation' }]
			})
			setSobralos(true)
		}
		if (!sobralos) {
			return (
				<View style={styles.collectOrder}>
					<Text style={styles.loadingText}>Собираем ваш набор</Text>
					<Text style={styles.loadingText}>Подбираем витамины</Text>
				</View>
			)
		} else {
			return (
				<View style={styles.container}>
					<Text style={styles.loadingText}>Вы уже собрали пакет</Text>
					<Text style={styles.loadingText}>Вернитесь, если хотите собрать новый набор</Text>

					<View style={styles.buttonContainer}>
						<ButtonPrev
							style={{ width: '100%' }}
							onPress={() => {
								navigation.reset({
									index: 0,
									routes: [{ name: 'surveysMiddleware' }]
								})
							}} />
					</View>
				</View>
			)
		}
	}

	useEffect(() => {
		setFetch(true)
		if (SyncStorage.get('sessionIdSurvey') != idSession) {
			setIdSession(SyncStorage.get('sessionIdSurvey'))
			setRedirectSurvey(true)
		}
	}, [])

	useEffect(() => {
		setFetch(true)
		surveyAPI.getCurrentPage(idSession)
			.then(response => {
				if (!response.data.is_null) {
					let tempData = { ...response.data.page.attributes }
					tempData.answers.forEach((answer, index) => {
						response.data.page.answers.forEach(answerServer => {
							if (answerServer.key === answer.key) {
								tempData.answers[index].value = answerServer.value.content
							}
							if (answerServer.key == 'phone')
								setPhone(answerServer.value.content)
						})
					})
					setData(tempData)
				} else
					setLoading(true)
				setFetch(false)
			}).catch(error => {
				setFetch(false)
			})
	}, [idSession])

	const onClickNextPage = () => {
		setFetch(true)
		const pageAnswers = {
			answers: []
		}
		data.answers.forEach(answer => {
			pageAnswers.answers.push(
				{
					key: answer.key,
					value: { content: answer.value }
				}
			)
		})
		surveyAPI.getNextPage(idSession, pageAnswers)
			.then(response => {
				if (!response.data.is_null) {
					let tempData = { ...response.data.page.attributes }
					tempData.answers.forEach((answer, index) => {
						response.data.page.answers.forEach(answerServer => {
							if (answerServer.key === answer.key) {
								tempData.answers[index].value = answerServer.value.content
							}
							if (answerServer.key == 'phone')
								setPhone(answerServer.value.content)
						})
					})
					setData(tempData)
				} else
					setLoading(true)
				setFetch(false)
			}).catch(error => {
				setFetch(false)
			})
	}
	const onClickPrevPage = () => {
		setFetch(true)
		const pageAnswers = {
			answers: []
		}
		data.answers.forEach(answer => {
			pageAnswers.answers.push(
				{
					key: answer.key,
					value: { content: answer.value }
				}
			)
		})
		surveyAPI.getPreviousPage(idSession, pageAnswers)
			.then(response => {
				let tempData = { ...response.data.page.attributes }
				tempData.answers.forEach((answer, index) => {
					response.data.page.answers.forEach(answerServer => {
						if (answerServer.key === answer.key) {
							tempData.answers[index].value = answerServer.value.content
						}

						if (answerServer.key == 'phone')
							setPhone(answerServer.value.content)
					})
				})
				setData(tempData)
				setFetch(false)
			}).catch(error => {
				setFetch(false)
			})
	}

	if (redirectSurvey) {
		navigation.navigate('tab/formNavigation')
	}

	return (
		<View style={styles.container}>
			{loading ?
				<Loading /> :
				<>
					{!fetch ?
						<>
							<ScrollView style={styles.content}
								showsVerticalScrollIndicator={false}>

								{data.type !== 'PROLOGUE' &&
									<Text style={styles.textSteps}>Шаг {data.current_step} из {data.steps_count}</Text>}

								{((data.title !== 'empty' && data.title !== '') && data.type !== 'PROLOGUE') &&
									<Text style={styles.question}>{data.title}</Text>}

								{((data.description !== 'empty' && data.description !== '') && data.type !== 'PROLOGUE') &&
									<Text style={styles.paragraph}>{data.description}</Text>}

								{data.type === 'PROLOGUE' &&
									<OnBoard
										image={data.image}
										title={data.title}
										setDisabledButton={setDisabledButton}
										description={data.description} />}

								{data.type === 'CHECKBOXES' &&
									<CheckBoxComponent
										setDisabledButton={setDisabledButton}
										data={data}
										setData={setData} />}

								{data.type === 'INPUT_TEXT' &&
									<Inputs
										setDisabledButton={setDisabledButton}
										type={'text'}
										data={data}
										setData={setData} />}

								{data.type === 'INPUT_NUMBER' &&
									<Inputs
										setDisabledButton={setDisabledButton}
										type={'number'}
										data={data}
										setData={setData} />}

								{data.type === 'RADIOBUTTONS' &&
									<RadioBattons
										data={data}
										setDisabledButton={setDisabledButton}
										setData={setData}
										onClickNextPage={onClickNextPage}
									/>}
							</ScrollView>

							<View style={styles.buttonContainer}>
								<ButtonPrev
									onPress={onClickPrevPage}
									disabledButton={disabledButton} />
								<ButtonNext
									disabledButton={disabledButton}
									title='Далее'
									onPress={onClickNextPage} />
							</View>
						</>
						:
						<View style={styles.container}>
							<Spinner type='Circle' color='#7F808180' size={40} />
						</View>
					}
				</>
			}
		</View>
	)
}

export default Form;