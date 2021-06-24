import * as axios from "axios";

// const instanceWithToken = () => axios.create({
// 	withCredentials: true,
// 	baseURL: `https://${process.env.REACT_APP_BACK_DOMEN_NAME}/api/v1/`,
// 	headers: {
// 		"Authorization": "Bearer " + localStorage.getItem("token")
// 	}
// });

// const instanceWithRefreshToken = () => axios.create({
// 	withCredentials: true,
// 	baseURL: `https://${process.env.REACT_APP_BACK_DOMEN_NAME}/api/v1/`,
// 	headers: {
// 		"Authorization": "Bearer " + localStorage.getItem("tokenRefresh")
// 	}
// });

const instance = () => axios.create({
	withCredentials: true,
	baseURL: `https://poly.wellbe.club/api/v1/`,
});

export const surveyAPI = {
	createSession(idSurvey) {
		return instance().get(`/surveys/survey/${idSurvey}`)
	},
	getCurrentPage(idSession) {
		return instance().get(`/surveys/session/${idSession}/current`)
	},
	getNextPage(idSession, data) {
		return instance().post(`/surveys/session/${idSession}/next`, { ...data })
	},
	getPreviousPage(idSession, data) {
		return instance().post(`/surveys/session/${idSession}/return_with_save`, { ...data })
	},
	smsRegistrationWithoutData(sessionId) {
		return instance().get(`/worksheets/buying/simple_recommendation?session_id=${sessionId}`)
	},
}

export const appFormsAPI = {
	getDataRecommendationsDetailed(token) {
		return instance().get(`/recommendations/detailed_recommendation/${token}`)
	},
}