import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';
import { surveyAPI } from "../api/api";

//screen
import { StartScreen } from "../screens";

//nav
import { useNavigation } from '@react-navigation/native';

//other deps
import SyncStorage from 'sync-storage';
import Spinner from 'react-native-spinkit';

const paramsIdSurvey = 'a8d9ea04-2ef9-4ed9-9ff4-bf2ebe168c8d';
//const paramsIdSurvey = '2e95d454-d62e-474a-bea9-d10675213afe';

const SurveysMiddleware = () => {
	const navigation = useNavigation();

	const [redirect, setRedirect] = useState(false);
	const [idSurvey, setIdSurvey] = useState(null)

	useEffect(() => {
		if (SyncStorage.get('sessionIdSurvey') == null) {
			surveyAPI.createSession(paramsIdSurvey)
				.then(response => {
					setIdSurvey(response.data.id)
					SyncStorage.set('sessionIdSurvey', response.data.id)
					SyncStorage.set('redirectRecommendation', 'false')
					setRedirect(true)
				}).catch(error => {
				})
		} else {
			setIdSurvey(SyncStorage.get('sessionIdSurvey'))
			setRedirect(true)
		}
	}, [])
	if (redirect) {
		return (
			<StartScreen
				onPress={() => {
					navigation.navigate('form')
				}} />
		)
	}
	return (
		<View style={styles.container}>
			{redirect}
			<Spinner type='Circle' color='#7F808180' size={40} />
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingTop: 44
	},
});

export default SurveysMiddleware;